

# JudgeZoom

<sup>הסבר כללי על מבנה המערכת:
בקליינט :
תיקיית  CORE - לרכיבים הבסיסים
מודול sharedModule- לרכיבים משותפים
מודול VideoConferenceModule בתוכו נמצאת הקומפננטה של מסך דיון (VideoScreenComponent)
מודול VideoConferenceModule לפרטי דיון
בaap.routing ניתוב Lazy Loding למודולים השונים
בסרבר(.Net CORE 6):
פרויקט API עם Reference ל-
שכבת הBL (Class Libary) עם Reference ל-
שכבת הDAL (Class Libary)
שם הגדרתי את המודלים השונים(שופט, מייצג וכו') , מתוך הבנה שאמור להיות מאפיינים ותכונות שונות בין סוגי התפקידים.
</sup>
