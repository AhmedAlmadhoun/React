const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./userModel'); // استيراد نموذج المستخدم

app.use(cors());
app.use(express.json());

// توصيل قاعدة البيانات
mongoose.connect('mongodb://localhost:27017/MyDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('تم الاتصال بقاعدة البيانات بنجاح');
  })
  .catch((error) => {
    console.error('فشل الاتصال بقاعدة البيانات:', error);
  });

// مثال على استخدام نموذج المستخدم
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // إنشاء وحفظ مستخدم جديد باستخدام نموذج المستخدم
    const newUser = new User({ email, password });
    await newUser.save();

    res.json({ message: 'تم إنشاء المستخدم بنجاح' });
  } catch (error) {
    console.error('فشل إنشاء المستخدم:', error);
    res.status(500).json({ message: 'حدث خطأ غير متوقع' });
  }
});

app.listen(3001, () => {
  console.log('الخادم يعمل على المنفذ 3001');
});
