import React from "react";

import styles from "./FullPost.module.scss";
import { Post } from "../../components/Post";
import { Comments } from "../../components/Comments";
import { AddComment } from "../../components/AddComment";


export const FullPost = () => {
    return (
        <div className={`${styles.root} content`}>
            <Post
                _id={1}
                title="Money, prestige or fashion. What influences the choice of an applicant"
                subtitle="
                In every district of Moscow there are a lot of options for children's leisure: circles, sections, creative studios. But a truly exclusive choice is in the city center: it is here that the highest concentration of children's creative studios and schools with a history, a big name and top-class teachers is located. The experts who created the children's infrastructure of the Lavrushinsky elite home from Sminex-Inteko helped us choose the best: bookmark it and plan the next academic year with comfort.
                Maria Sokolova, psychologist, child psychotherapist, candidate of psychological sciences, expert in arranging the children's environment in the Lavrushinsky house
                The environment has a huge impact on a child's development. The range of hobbies, opportunities and skills depends on the environment in which he finds himself. In the USSR, this was well understood, so Pioneer Palaces were built throughout the country. Any child could come there and choose what he likes. If he understood that dancing, for example, was not for him, then he could switch in an instant and try something new - chess, drawing, mathematics.
                
                But the main reason why these centers were important was the independence of the child himself and the lack of payment from the parents, any child could go to different circles. Parents did not need to come with him to this center and ask to be transferred to another circle. Children could decide for themselves what they liked. Such independence has a positive effect on the character of the child.
                
                In the modern world, such Houses of Culture and Creativity do not have sufficient financial support. But more modern centers of creativity have appeared that work according to the latest methods and offer children a much more interesting experience. And they work in the very heart of Moscow.
                Since Soviet times, excellent theater and dance clubs have been operating in an old mansion right in the center of Moscow, as well as painting, acrobatics, music education, design, programming - in general, everything that today's children are interested in. The Pioneer Center, as it was formerly called, opened in 1942 and has continued to operate every day since.
                
                The advantages of the center are the teaching staff and the abundance of circles. Among the teachers there are psychologists, event organizers, methodologists, specialists in the fields of natural sciences and creativity. Masters of sports and experts regularly come to the center to give children master classes in dance, jiu-jitsu, puppet making and much more.
                
                Here you can even take additional classes in sagging school disciplines. The center also cooperates with top universities and prepares children for the Olympiads. Pupils of circles regularly take part in competitions, festivals, conferences, social events. For example, pupils of the center received diplomas from the Galerka Theater Studio and won the prestigious literary competition Magic Word.                
                "
                imageUrl="/resources/post.jpg"
                user="Kadirov Denis"
                createdAt="June 12, 2022"
                theme="Work"
                isEditables
                isFullPost
            />
            <Comments
                items={[
                    {
                        user: {
                            fullname: "Kadirov Denis",
                            avatarUrl: "https://i.ibb.co/kML9B7K/avataaars.png"
                        },
                        text: "Unfortunately I'm not a Muscovite but a Tyumen",
                        date: "June 20, 2022"
                    },
                    {
                        user: {
                            fullname: "Vasya Pupkin",
                            avatarUrl: "https://i.ibb.co/jh8YW32/avataaars-1.png"
                        },
                        text: "It’s official…I’m letting you style me next time we go out.",
                        date: "June 20, 2022"
                    },
                    {
                        user: {
                            fullname: "Alexander Kazantsev",
                            avatarUrl: "https://i.ibb.co/zh9Y9yW/avataaars-2.png"
                        },
                        text: "How is it even possible to look this cool?This look belongs on the red carpet!Where are the paparazzi?Putting this picture on my mood board.Please start a vlog so I can use it for inspo.Best #OOTD I’ve ever seen!",
                        date: "June 20, 2022"
                    }
                ]}
            >
                <AddComment />
            </Comments>
            
        </div>
    )
}