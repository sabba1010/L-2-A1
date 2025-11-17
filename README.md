1.What are some differences between interfaces and types in TypeScript?
TypeScript-এ interface এবং type—দুটোই অবজেক্টের গঠন নির্ধারণ করতে ব্যবহৃত হয়। কিন্তু তাদের কাজের ধরনে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।
#১. Declaration Merging

interface একাধিকবার ডিক্লেয়ার করলে স্বয়ংক্রিয়ভাবে merge হয়ে যায়।
interface User {
  name: string
}

interface User {
  age: number
}


#২. Union এবং Intersection

type বেশি flexible—union এবং intersection খুব সহজে তৈরি করা যায়।

type A = { x: number };
type B = { y: string };
type C = A & B; // intersection

#৩. কখন কোনটা ব্যবহার করবেন?

ভবিষ্যতে structure বাড়াতে হলে interface

জটিল টাইপ, union বা intersection লাগলে type

এ দুটোই দরকারি—ব্যবহার নির্ভর করে সমস্যার ধরনে।

2. TypeScript-এ any, unknown, এবং never — পরিষ্কার ব্যাখ্যা
এগুলো TypeScript-এর special types, আর interview-এ এগুলো খুব সাধারণ প্রশ্ন।
any — সবকিছু allowed, কিন্তু নিরাপদ নয়
any ব্যবহার করলে টাইপ-চেকিং বন্ধ হয়ে যায়। যেকোনো অপারেশন চলবে, কিন্তু ভুল ধরবে না।

let x: any = "hello";
x = 10;
x.toFixed(); // allowed, but unsafe


unknown — মান যেকোনো হতে পারে, কিন্তু ব্যবহার নিরাপদ

unknown যেকোনো মান নিতে পারে, কিন্তু ব্যবহার করার আগে টাইপ-চেক করতে হয়।

let data: unknown = 5;

if (typeof data === "number") {
  data.toFixed(2);
}


never — এমন মান যা কখনো ঘটে না

যে ফাংশন কখনো return করে না—যেমন সবসময় error throw করে—সেখানে never ব্যবহৃত হয়।


function crash(msg: string): never {
  throw new Error(msg);
}
