import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  padding: 40px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 40px;
  color: #0d47a1;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const ContentBox = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #0d47a1;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 15px;
  color: #444;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 10px 18px;
  font-size: 15px;
  background: #0d47a1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #08306b;
  }
`;

const blogs = [
    {
      id: 1,
      title: "Top 10 Chest Workouts for Massive Growth",
      img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
      desc: "Build a huge chest with these science-based exercises...",
    },
    {
      id: 2,
      title: "Fat Loss Diet That Actually Works",
      img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      desc: "A complete breakdown of the best fat-burning diet plan...",
    },
    {
      id: 3,
      title: "Beginner Gym Guide: Start Your Fitness Journey",
      img: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
      desc: "Confused in the gym? Here is the ultimate beginner guide...",
    },
    {
      id: 4,
      title: "Best Shoulder Workout Routine for Boulder Shoulders",
      img: "https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg",
      desc: "Build round, 3D shoulders with this workout plan...",
    },
    {
      id: 5,
      title: "Top 7 Leg Day Exercises for Massive Growth",
      img: "https://images.pexels.com/photos/2261483/pexels-photo-2261483.jpeg",
      desc: "Grow your quads, hamstrings, and calves effectively...",
    },
    {
      id: 6,
      title: "How to Burn Belly Fat Fast (Backed by Science)",
      img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      desc: "The truth about belly fat and how to get rid of it fast...",
    },
    {
      id: 7,
      title: "Best Bicep Workout for Peak Size",
      img: "https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg",
      desc: "Grow your bicep peak using proven science-based tips...",
    },
    {
      id: 8,
      title: "The Ultimate Tricep Workout for Bigger Arms",
      img: "https://images.pexels.com/photos/897062/pexels-photo-897062.jpeg",
      desc: "Triceps make 70% of your arm size—here’s how to grow them...",
    },
    {
      id: 9,
      title: "Full Body Workout Plan for Busy People",
      img: "https://images.pexels.com/photos/4761797/pexels-photo-4761797.jpeg",
      desc: "Perfect for beginners or people with limited time...",
    },
    {
      id: 10,
      title: "Best Protein Sources for Muscle Growth",
      img: "https://images.pexels.com/photos/7218636/pexels-photo-7218636.jpeg",
      desc: "Here are the top high-protein foods to add to your diet...",
    },
    {
      id: 11,
      title: "How to Fix Lower Back Pain from Deadlifts",
      img: "https://images.pexels.com/photos/5327498/pexels-photo-5327498.jpeg",
      desc: "Learn proper form and ways to avoid lower back injuries...",
    },
    {
      id: 12,
      title: "The Best Fat Loss Supplements (Safe & Effective)",
      img: "https://images.pexels.com/photos/3873170/pexels-photo-3873170.jpeg",
      desc: "These supplements help boost metabolism safely...",
    },
    {
      id: 13,
      title: "Top 10 Shoulder Mobility Exercises",
      img: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
      desc: "Improve shoulder mobility and avoid injuries...",
    },
    {
      id: 14,
      title: "Gym Mistakes That Are Killing Your Gains",
      img: "https://images.pexels.com/photos/247587/pexels-photo-247587.jpeg",
      desc: "Avoid these common mistakes beginners make...",
    },
    {
      id: 15,
      title: "How to Build a Greek God Physique",
      img: "https://images.pexels.com/photos/3253498/pexels-photo-3253498.jpeg",
      desc: "Aesthetic training guide to build a proportionate body...",
    },
    {
      id: 16,
      title: "Best Abs Workout to Get Six Pack Fast",
      img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      desc: "The fastest way to build visible abs naturally...",
    },
    {
        id: 17,
        title: "How to Gain Weight with a Fast Metabolism",
        img: "https://images.pexels.com/photos/5327507/pexels-photo-5327507.jpeg",
        desc: "Struggling to gain? Here is the best proven strategy...",
        
    },
    {
      id: 18,
      title: "10 Healthy Meal Prep Ideas for Fitness",
      img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      desc: "Easy and high-protein meals for daily diet...",
    },
    {
      id: 19,
      title: "Top Cardio Exercises for Fat Loss",
      img: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg",
      desc: "Burn fat faster using these top cardio workouts...",
    },
    {
      id: 20,
      title: "How to Build Strong Forearms at Home",
      img: "https://images.pexels.com/photos/3838388/pexels-photo-3838388.jpeg",
      desc: "Powerful exercises to increase grip strength...",
    }
  ];
  

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Heading>Top Fitness Blogs to Help You Build Muscle, Burn Fat & Stay Healthy</Heading>

      <BlogGrid>
        {blogs.map((blog) => (
          <Card key={blog.id}>
            <Img src={blog.img} />
            <ContentBox>
              <Title>{blog.title}</Title>
              <Desc>{blog.desc}</Desc>
              <Button onClick={() => navigate(`/blog/${blog.id}`)}>
                Read More
              </Button>
            </ContentBox>
          </Card>
        ))}
      </BlogGrid>
    </Page>
  );
};

export default Blogs;
