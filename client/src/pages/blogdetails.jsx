import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #0d47a1;
`;

const Img = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 16px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.8;
  color: #444;
  white-space: pre-line; /* VERY IMPORTANT FOR FORMATTING */
`;

const blogsFullContent = {
  1: {
    title: "🔥 Top 10 Chest Workouts for Massive Growth",
    img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    content: `
💪 **Building a big chest requires heavy compound lifts + controlled isolation movements.**

🔥 **Top 10 Chest Workouts**
1️⃣ Barbell Bench Press  
2️⃣ Incline Dumbbell Press  
3️⃣ Decline Bench Press  
4️⃣ Flat Dumbbell Press  
5️⃣ Pec Deck Fly Machine  
6️⃣ Cable Crossovers  
7️⃣ Low-to-High Cable Fly  
8️⃣ Weighted Chest Dips  
9️⃣ Diamond Push-Ups  
🔟 Smith Machine Bench Press  

✨ **Rules for maximum growth:**
• Train chest 2× per week  
• Use progressive overload  
• Slow & controlled negative reps  
• Maintain correct form  

🏆 Follow this plan for 8–10 weeks for massive gains!
    `,
  },

  2: {
    title: "🥗 Fat Loss Diet That Actually Works",
    img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    content: `
🔥 **Fat loss = 70% Diet + 30% Workout**

📌 **Golden Rules**
• Maintain calorie deficit  
• High protein (1.6–2g/kg body weight)  
• Avoid sugar completely  
• Eat fiber-rich foods  
• Drink 3–4 liters water daily  

🍽️ **Sample Diet Plan**
🥣 Breakfast → Oats + Eggs  
🍚 Lunch → Rice + Chicken + Salad  
🥜 Snack → Fruits / Nuts  
🥗 Dinner → Roti + Paneer / Chicken  

✨ Follow this to lose **4–7kg per month naturally.**
    `,
  },

  3: {
    title: "🏋️ Beginner Gym Guide – Start Your Journey",
    img: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
    content: `
🚀 **If you're new to the gym, start slow & learn proper form.**

📌 **Beginner Tips**
• Start with full-body workouts  
• Avoid ego lifting  
• Sleep 7–8 hours daily  
• Focus on posture & technique  
• Stay consistent for 3 months  

🗓️ **Beginner Workout Routine**
Day 1 → Chest + Triceps  
Day 2 → Back + Biceps  
Day 3 → Rest  
Day 4 → Legs + Shoulders  
Day 5 → Full Body  

🔥 **Consistency will transform your body.**
    `,
  },

  4: {
    title: "💥 Shoulder Workout for Boulder Shoulders",
    img: "https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg",
    content: `
🏋️ To get **3D round shoulders**, train all 3 deltoids.

🔥 **Best Shoulder Exercises**
1. Overhead Barbell Press  
2. Dumbbell Shoulder Press  
3. Side Lateral Raises  
4. Cable Lateral Raises  
5. Rear Delt Fly  
6. Face Pulls  

📌 **Tips**
• Use lighter weights for side raises  
• Don't swing your body  
• Train shoulders twice per week  
    `,
  },

  5: {
    title: "🦵 Top 7 Leg Day Exercises for Growth",
    img: "https://images.pexels.com/photos/2261483/pexels-photo-2261483.jpeg",
    content: `
🔥 Legs = Strength + Power + Aesthetics  

🏋️‍♂️ **Best Leg Exercises**
1️⃣ Barbell Squats  
2️⃣ Leg Press  
3️⃣ Romanian Deadlift  
4️⃣ Lunges  
5️⃣ Hamstring Curl  
6️⃣ Calf Raises  
7️⃣ Hip Thrusts  

✨ Tips:  
• Deep squats give best growth  
• Use progressive overload  
• Hit legs once every 5–7 days  
    `,
  },

  6: {
    title: "🔥 How to Burn Belly Fat Fast",
    img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    content: `
❗ **Spot reduction is a myth — belly fat melts only through overall fat loss.**

🔥 **How to burn belly fat fast**
• Eat high-protein meals  
• Avoid sugar completely  
• Walk 10,000 steps daily  
• Lift heavy weights  
• Sleep 7+ hours  

✨ Follow for 30 days → visible belly fat reduction.
    `,
  },

  7: {
    title: "💪 Best Bicep Workout for Peak Size",
    img: "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg",
    content: `
💥 To build a tall bicep peak, target the **long head**.

🔥 **Best Bicep Exercises**
1. Dumbbell Curls  
2. Hammer Curls  
3. Preacher Curls  
4. Cable Curls  
5. Concentration Curls  

📌 Tips:
• Slow reps = better tension  
• Don’t swing elbows  
• Train biceps twice a week  
    `,
  },

  8: {
    title: "💥 Ultimate Tricep Workout for Bigger Arms",
    img: "https://images.pexels.com/photos/897062/pexels-photo-897062.jpeg",
    content: `
💡 Triceps = **70% of total arm size**

🔥 **Best Tricep Exercises**
1. Skull Crushers  
2. Rope Pushdowns  
3. Close-Grip Bench Press  
4. Overhead Dumbbell Extension  
5. Tricep Dips  

✨ Tips  
• Keep elbows fixed  
• Focus on lockout  
• Use mind–muscle connection  
    `,
  },

  9: {
    title: "🏋️ Full Body Workout Plan for Busy People",
    img: "https://images.pexels.com/photos/4761797/pexels-photo-4761797.jpeg",
    content: `
⏳ Don’t have time for daily workouts? Try **full-body training**.

🔥 **Exercises**
• Squats  
• Bench Press  
• Deadlifts  
• Pull-Ups  
• Shoulder Press  
• Bicep Curls  

✨ Do this 3× a week → guaranteed results.
    `,
  },

  10: {
    title: "🍗 Best Protein Sources for Muscle Growth",
    img: "https://images.pexels.com/photos/7218636/pexels-photo-7218636.jpeg",
    content: `
💪 Muscle growth = high protein intake.

🔥 **Best Protein Foods**
• Chicken  
• Eggs  
• Paneer  
• Fish  
• Chole / Dal / Rajma  
• Whey Protein  

👉 Target: **1.6–2g of protein per kg body weight**
    `,
  },

  11: {
    title: "⚠️ Fix Lower Back Pain from Deadlifts",
    img: "https://images.pexels.com/photos/5327498/pexels-photo-5327498.jpeg",
    content: `
⚠️ Common Deadlift Mistakes
• Rounding lower back  
• Lifting too heavy  
• Not engaging the core  

🔥 **Fix It:**
• Maintain neutral spine  
• Keep bar close to shins  
• Strengthen lower back  

Deadlifts are safe **when done correctly**.
    `,
  },

  12: {
    title: "🔥 Best Fat Loss Supplements (Safe & Effective)",
    img: "https://images.pexels.com/photos/3873170/pexels-photo-3873170.jpeg",
    content: `
⚡ Supplements that actually help:

🔥 **Best Fat Loss Supplements**
• L–Carnitine  
• Green Tea Extract  
• Caffeine  
• Whey Protein  

⚠️ Supplements help, **but diet matters more.**
    `,
  },

  13: {
    title: "🌀 Top 10 Shoulder Mobility Exercises",
    img: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
    content: `
🌀 Good mobility = fewer injuries + better lifts.

🔥 **Mobility Exercises**
• Arm Circles  
• Wall Angels  
• Resistance Band Stretch  
• Scapular Retractions  
• Face Pulls  

Do these daily for strong shoulders.
    `,
  },

  14: {
    title: "❌ Gym Mistakes That Kill Your Gains",
    img: "https://images.pexels.com/photos/247587/pexels-photo-247587.jpeg",
    content: `
❌ Biggest Mistakes:
• Not tracking workouts  
• Wrong form  
• No progressive overload  
• Poor sleep  
• Bad diet  

Fix these to **double your progress**.
    `,
  },

  15: {
    title: "⚡ Build a Greek God Physique",
    img: "https://images.pexels.com/photos/3253498/pexels-photo-3253498.jpeg",
    content: `
🏛️ Greek God physique = aesthetics + symmetry.

🔥 Focus On:
• Wide shoulders  
• Small waist  
• Defined chest  
• Strong abs  

Train smart — not just heavy.
    `,
  },

  16: {
    title: "🏆 Best Abs Workout for Six-Pack",
    img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    content: `
🔥 **Best Ab Exercises**
1. Hanging Leg Raises  
2. Cable Crunches  
3. Planks  
4. Reverse Crunches  
5. Mountain Climbers  

💡 Abs are built in the gym but **revealed in the kitchen**.
    `,
  },

  17: {
    title: "🍔 How to Gain Weight with Fast Metabolism",
    img: "https://images.pexels.com/photos/5327507/pexels-photo-5327507.jpeg",
    content: `
🍔 Tips to Gain Weight Fast:
• Eat calorie-dense foods  
• Add milkshakes & smoothies  
• Strength training  
• Sleep well  

Gain **3–5kg per month** with consistency.
    `,
  },

  18: {
    title: "🥗 10 Healthy Meal Prep Ideas",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    content: `
🍽️ Meal prep = time saving + consistency

🔥 **Healthy Meals**
• Oats + fruits  
• Chicken rice bowls  
• Paneer salad  
• Veg sandwiches  
• High-protein shakes  

Perfect for fitness lifestyle.
    `,
  },

  19: {
    title: "🏃 Top Cardio Exercises for Fat Loss",
    img: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg",
    content: `
🔥 Best Cardio:
• Running  
• Cycling  
• Swimming  
• HIIT  
• Jump Rope  

Do 20–30 minutes daily for best results.
    `,
  },

  20: {
    title: "💪 Build Strong Forearms at Home",
    img: "https://images.pexels.com/photos/3838388/pexels-photo-3838388.jpeg",
    content: `
💪 Forearms improve grip & overall strength.

🔥 **Best Forearm Exercises**
• Wrist Curls  
• Farmer’s Walk  
• Dead Hangs  
• Reverse Curls  
• Static Holds  

Train 2–3 times weekly for results.
    `,
  },
};

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsFullContent[id];

  if (!blog)
    return <h2 style={{ padding: "40px" }}>❌ Blog Not Found</h2>;

  return (
    <Page>
      <Title>{blog.title}</Title>
      <Img src={blog.img} />
      <Content>{blog.content}</Content>
    </Page>
  );
};

export default BlogDetails;
