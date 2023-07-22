import React from "react";
import { Post } from "../components/Post";

import styles from "./Home.module.scss";


export const Home = () => {
    return (
        <div className={`${styles.root} content`}>
            <Post 
                _id={1}
                title="Money, prestige or fashion. What influences the choice of an applicant"
                subtitle="In every district of Moscow there are a lot of options for children's leisure: circles, sections, creative studios. But a truly exclusive.."
                imageUrl="/resources/post.jpg"
                user="Kadirov Denis"
                theme="Work"
                isEditable
            />
            <Post 
                _id={1}
                title="Money, prestige or fashion. What influences the choice of an applicant"
                subtitle="In every district of Moscow there are a lot of options for children's leisure: circles, sections, creative studios. But a truly exclusive.."
                imageUrl="/resources/post2.png"
                user="Kadirov Denis"
                theme="Work"
                isEditable
            />
            <Post 
                _id={1}
                title="Money, prestige or fashion. What influences the choice of an applicant"
                subtitle="In every district of Moscow there are a lot of options for children's leisure: circles, sections, creative studios. But a truly exclusive.."
                imageUrl="/resources/post.jpg"
                user="Kadirov Denis"
                theme="Work"
                isEditable
            />
            <Post 
                _id={1}
                title="Money, prestige or fashion. What influences the choice of an applicant"
                subtitle="In every district of Moscow there are a lot of options for children's leisure: circles, sections, creative studios. But a truly exclusive.."
                imageUrl="/resources/post2.png"
                user="Kadirov Denis"
                theme="Work"
                isEditable
            />
            <Post 
                _id={1}
                title="Money, prestige or fashion. What influences the choice of an applicant"
                subtitle="In every district of Moscow there are a lot of options for children's leisure: circles, sections, creative studios. But a truly exclusive.."
                imageUrl="/resources/post.jpg"
                user="Kadirov Denis"
                theme="Work"
                isEditable
            />
            <Post 
                _id={1}
                title="Money, prestige or fashion. What influences the choice of an applicant"
                subtitle="In every district of Moscow there are a lot of options for children's leisure: circles, sections, creative studios. But a truly exclusive.."
                imageUrl="/resources/post2.png"
                user="Kadirov Denis"
                theme="Work"
                isEditable
            />
        </div>
    )
    
}