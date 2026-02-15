<!-- questions.js -->
<script>
/* مفتاح التخزين */
const STORAGE_KEY = "hz_ramadan_questions_v1";

/* الأسئلة الافتراضية */
const defaultQuestions = [
    { q: "يشرع استقبال شهر رمضان بالتوبة النصوح الصادقة من جميع الذنوب.", a: true },
    { q: "من السنة الاستعداد لرمضان بالمبالغة في شراء الأطعمة والمشروبات.", a: false },
    { q: "حقيقة الصيام هي حفظ الجوارح عن الآثام وليس مجرد ترك الطعام والشراب.", a: true },
    { q: "من المخالفات الشائعة ضياع الأوقات في متابعة المسلسلات والقنوات.", a: true },
    { q: "الأفضل للمصلي في صلاة التراويح أن ينصرف قبل أن يكمل الإمام صلاته.", a: false },
    { q: "السحور سنة مؤكدة وفيه بركة عظيمة تقوي الصائم على العبادة.", a: true },
    { q: "من هدي النبي صلى الله عليه وسلم تعجيل الفطر فور ثبوت دخول الوقت.", a: true },
    { q: "يستحب استقبال شهر رمضان بالشك في دخول الشهر احتياطاً.", a: false },
    { q: "صون السمع والبصر عن المحرمات واجب على الصائم ليكون صومه حقيقياً.", a: true },
    { q: "يعتبر الانشغال بغير الطاعات في العشر الأواخر من رمضان من الحرمان.", a: true }
];

/* تحميل الأسئلة من LocalStorage أو الافتراضية */
function loadQuestions() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.warn("LocalStorage error, using defaults", e);
    }
    return [...defaultQuestions];
}

/* حفظ الأسئلة في LocalStorage */
function saveQuestions(questions) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
    } catch (e) {
        console.error("Failed to save questions", e);
    }
}

/* إعادة ضبط الأسئلة إلى الافتراضية */
function resetQuestions() {
    saveQuestions(defaultQuestions);
    return loadQuestions();
}
</script>
