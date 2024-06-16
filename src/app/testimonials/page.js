import Navbar from "@/component/commons/navbar/Navbar";
import Testimonial from "./Testimonial";
import { images } from "@/config";

export default function About() {
    const testimonials = [
        {
            src: images.maham,
            testimonial: "He is a creative director's dream come true- he wouldn't settle on mediocrity but strive to crack a real creative solution to the brief. He is smart, attentive and a next level team player with a knack in utilizing the best expertise of everyone on the team and combining it with his own unique creative development streak. He makes you feel understood and ensures that he puts out his best foot forward. As his direct manager, it was a true joy working with Naufil.",
            reference:"—Maham Tariq, Content Director. Ogilvy"
        },
        {
            src: images.omer,
            testimonial: "A dream team member with a never-say-die attitude. Naufil is a talented creative, a quick learner and always brings in a fresh perspective to any communications challenge. Highly reliable, you can consider it done, if it's with Naufil. I have seen him progress from a junior creative resource trying to find his place to someone who can  easily develop integrated creative content for an entire campaign",
            reference:"—Omer Azeem, Chief Strategy Officer. M&C SAATCHI"
        },
        {
            src: images.fahad,
            testimonial: "If you're looking for an exceptional creative thinker, then Naufil is your man. I had the pleasure of  working with him for a year and was constantly impressed by his ability to really understand a brief and come up with ideas that were both creative and effective. His strategic acumen and youthful creativity give him a real edge in today's ever-changing, hybrid communications landscape",
            reference:"—Fahad Bombaywala, Groud Creative Director. M&C SAATCHI"
        },
        {
            src: images.ali,
            testimonial: "I had the pleasure of directly supervising Naufil during my time at BBDO, and I was consistently impressed by his creative process combined with his ability to produce high-quality work in a timely manner. His quality of work was not only consistently excellent, but Naufil always exceeded expectations and delivered results. 💯 ",
            reference:"—Ali Asif, Senior Copywriter, BBDO PROXIMITY"
        },
        {
            src: images.moiz,
            testimonial: "I had the pleasure of having Naufil Faisal as part of my creative team in Pakistan. Naufil started outas an intern for community management. In an office of over 75+ people, it wasn’t hard to notice thezealous nature of Naufil. I have seldom seen hunger like the one I found in this young lad. He wanted toprove himself in the creative department and was given a chance to do so. The very next day, Naufil cameup with a notebook brimming with ideas for our latest cricket campaign.",
            reference:"—Moiz Khan, Creative Director, BBDO PROXIMITY"
        },
    ]
    return (
        <div>
            <Navbar />
            <div className="mt-24 bg-dark">
                {testimonials.map((item, index) => (
                    <Testimonial 
                        key={index} 
                        src={item.src} 
                        testimonial={item.testimonial} 
                        reference={item.reference} 
                    />
                ))}
            </div>
        </div>
    );
}
