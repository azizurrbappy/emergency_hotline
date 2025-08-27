## ❓What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 1. getElementById()

এটা দিয়ে কোনো একটা এলিমেন্ট আইডি দিয়ে ধরা যায়। ধরি `id="ph_course"`,
`document.getElementById("ph_course")` এখন শুধু সেই এলিমেন্টকে ধরবে যেটার আইডি
`ph_course`.

### 2. getElementsByClassName("")

এটা দিয়ে নির্দিষ্ট class নামের সব এলিমেন্ট ধরা যায়। ধরি `id="b12_class"`,
`document.getElementByClassName("ph_course")` এখন সেই এলিমেন্ট গুলোকেই ধরবে
যেগুলোর ক্লাস `b12_class`.

### 3. querySelector("")

শুধু আইডি এবং ক্লাস দিয়েই এলিমেন্ট ছাড়াও CSS সিলেক্টর ব্যবহার করে এলিমেন্ট ধরা
যায়। এটা `querySelector(".ph")` CSS সিলেক্টর ব্যবহার করে প্রথম যে এলিমেন্ট পায়
সেটাকে সিলেক্ট করে।

### 4. querySelectorAll(".ph")

ধরি `class="ph"`, `querySelectorAll(".ph")` এটা `querySelector("")` বিপরীত কাজ
করে। মানে ph ক্লাস যতগুলো এলিমেন্টে পাবে সবগুলোকে সে ধরে ফেলবে এবং একটা NodeList
রিটার্ন করে।

## ❓How do you create and insert a new element into the DOM?

DOM এ নতুন এলিমেন্ট তৈরি করতে
document.createElement(div/section/header...ইত্যাদি) ব্যাবহার করে এলিমেন্ট
বানাই। এরপর তার ভেতরের টেক্সট বা অ্যাট্রিবিউট সেট করি। শেষে appendChild() দিয়ে
সেটা DOM-এ যেকোনো পজিশনে যোগ করি। যেমন, নতুন p ট্যাগ তৈরি করে কোন ডিভের ভিতরে
ঢোকানো যায়।

## ❓What is Event Bubbling and how does it work?

এটা যখন কোনো এলিমেন্টে ইভেন্ট রান করা হয় (যেমন click), তখন সেটা ধীরে ধীরে তার
parent এলিমেন্ট পর্যন্ত যায়। অর্থাৎ, child এলিমেন্টে থেকে শুরু করে outer element
এর দিকে ইভেন্ট “bubble” করে। parent এলিমেন্টও সেই ইভেন্টটি handle করতে পারে।

## ❓What is Event Delegation in JavaScript? Why is it useful?

এটা হলো একটা টেকনিক যেখানে parent element এর উপর event listener ব্যবহার করা হয়
এবং child element এ ঘটানো event parent এর মাধ্যমে handle করা হয়। এটা memory কম
খায় এবং নতুন element add করলে আলাদা listener লাগানোর দরকার পড়ে না। তাই কোড অনেক
cleaner এবং efficient হয়।

## ❓What is the difference between preventDefault() and stopPropagation() methods?

`preventDefault()` ইভেন্টের ডিফল্ট ব্রাউজার বিহেবিয়ার বন্ধ করে, যেমন লিঙ্কে
ক্লিক করলে পেজ রিলোড হয় না। `stopPropagation()` ইভেন্টকে Dom এ আরও উপরে পাঠানো
আটকায়, অর্থাৎ প্যারেন্ট এলিমেন্টে হ্যান্ডলার ট্রিগার হবে না। এই দুইটা একসাথে
ব্যবহার করলে ইভেন্ট কন্ট্রোল সম্পূর্ণ নিজের হাতে নেওয়া যায়।
