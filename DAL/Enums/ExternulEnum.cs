using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Enums
{
    public static class EnumExtensions
    {
        public static bool IsNullableEnum(this Type t)
        {
            Type u = Nullable.GetUnderlyingType(t);
            return (u != null) && u.IsEnum;
        }

        public static List<T> EnumToList<T>()
        {
            Type enumType = typeof(T);

            // Can't use type constraints on value types, so have to do check like this
            if (enumType.BaseType != typeof(Enum))
                throw new ArgumentException("T must be of type System.Enum");

            Array enumValArray = Enum.GetValues(enumType);

            List<T> enumValList = new List<T>(enumValArray.Length);

            foreach (int val in enumValArray)
            {
                enumValList.Add((T)Enum.Parse(enumType, val.ToString()));
            }

            return enumValList;
        }

        public static List<KeyValuePair<T, string>> EnumToListWithDescription<T>()
        {
            Type enumType = typeof(T);

            // Can't use type constraints on value types, so have to do check like this
            if (enumType.BaseType != typeof(Enum))
                throw new ArgumentException("T must be of type System.Enum");

            var enumValArray = Enum.GetValues(enumType);
            var enumDescriptionList = new List<KeyValuePair<T, string>>(enumValArray.Length);

            foreach (Enum val in enumValArray)
            {
                var v = (T)Enum.Parse(enumType, val.ToString());
                enumDescriptionList.Add(new KeyValuePair<T, string>(v, Description(val)));
            }

            return enumDescriptionList;
        }

        public static string Description(this bool value)
        {
            return value == true ? "כן" : "לא";
        }

        public static string Description(this Enum value)
        {
            if (value == null)
                return string.Empty;

            string description = value.ToString();

            FieldInfo fieldInfo = value.GetType().GetField(description);

            if (fieldInfo != null)
            {
                DisplayAttribute[] attributes =
                   (DisplayAttribute[])fieldInfo.GetCustomAttributes(typeof(DisplayAttribute), true);

                if (attributes != null && attributes.Length > 0)
                    description = attributes[0].Description;
            }

            return description;
        }
    }
}

