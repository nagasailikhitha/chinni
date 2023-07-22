import { Grid,Typography } from "@mui/material"
import BasicCard from "../../components/BasicCard"
const home=[
    {
        image:"https://chaibisket.com/wp-content/uploads/2020/11/Screenshot-2020-11-12-at-5.48.03-PM-1024x428.png",
        title:"Aakasam nee Haddura ",
        description:"Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest",
        year:"2020",
        rating:"rating:4.8*"
    },
    {
        image:"https://www.nowrunning.com/content/movie/2016/Dangal/Stills/Dangal-Stills-11.jpg ",
        title:"Dangal ",
        description:" The film stars Khan as Mahavir Singh Phogat, a pehlwani amateur wrestler who trains his daughters Geeta Phogat and Babita Kumari to become India's first world-class female wrestlers.",
        year:"2016",
        rating:"rating:4.6*"
    },
    {
        image:"https://m.sakshipost.com/sites/default/files/article_images/2022/08/19/karthikeya%202-1660886658.jpg ",
        title:"Karthikeya2 ",
        description:" Trapped in a web of conspiracies and betrayal, Karthikeya, a doctor, must retrieve a mythological treasure and clear his name.",
        year:"2022",
        rating:"rating:4.9*"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShILi92cNLjXG-oWx-GmkLqTCg4ZqH40Oopw&usqp=CAU ",
        title:"Major ",
        description:" The film focuses on the life of Major Sandeep Unnikrishnan who was killed in action in the 2008 Mumbai attacks",
        year:"2022",
        rating:"rating:4.5*"
    },
    {
        image:"https://sm.mashable.com/mashable_in/seo/6/6335/6335_ac9e.jpg ",
        title:"Mission Mangal ",
        description:" A group of scientists at ISRO battle in their personal and professional lives and work tirelessly towards their only motive, the Mars Orbiter Mission.",
        year:"2019",
        rating:"rating:5*",
      
    },
    {
        image:"https://i.ytimg.com/vi/reDCJkUjC0c/maxresdefault.jpg ",
        title:"Naa peru surya na illu India ",
        description:"  His dream is to fight at the border so that people in his country can live in peace and prosper, but his anger comes as a hindrance to his dream.",
        year:"2018",
        rating:"rating:4.3*"
    },
    {
        image:"https://images.indianexpress.com/2021/11/RRR-1200.jpg ",
        title:"RRR ",
        description:"In 1920, fate brings together two revolutionaries fighting their individual battles against the British empire far away from home.",
        year:"2022",
        rating:"rating:5*"
    },
    {
        image:"https://static.toiimg.com/thumb/msid-93338875,width-400,resizemode-4/93338875.jpg ",
        title:"SitaRamam",
        description:" Upon returning to Pakistan, Afreen sets off to fulfil her grandfather's wish of delivering a letter from Ram to Sita. Along the way, she finds Ram and learns about their love story.",
        year:"2022",
        rating:"rating:5*"
    },
]
export default function Movies(){
    return(
        <>
         
       <Grid xs={2} >
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3,p:4 }}>
        {
                   home.map((home)=>{
                       return <BasicCard image={home.image} title={home.title} description={home.description} year={home.year} rating={home.rating} />
                   })
               }
                
               </Grid>
               </Grid>
    
              
     

        </>
    )
}