import React , {useState} from 'react';
 const Quotes =  () => {
        const quotes = {
            0:{
                client: "Ross St. Clair, Project Lead, D2W Logistics Project",
                quote: "Having recently worked with Alvin on a class group project, I'm was really impressed with his high level of engagement and collaboration throughout the whole project. Alvin always made himself available for team meetings and was timely with his communication as well. His exceptional skill with CSS is what really brought the project together. His vision and aptitude created the wow factor that gave our project a very clean, polished, and professional look",
            },
            1: {
                client: "Vanessa Baez, R1 Concepts",
                quote: " You are a strong part of the team here at R1 forecast is important in making sure we have our highest sellers in stock and ready to be shipped out when customers order parts. I believe you have a lot of room to grow in learning different jobs here at R1. You recently began helping Inventory and I know for them it is a huge help. You always have a smile and jokes for the office super important in making sure the environment is friendly and healthy"
            },      
            2: {
                client: "Instructor Zack Pieper",
                quote: "Really great work when it comes to CSS designs from  "
            },        
            3: {
                client: "Caremax",
                quote: "Very hardworking and storng work ethic when it comes to his task and responsibilities. "
            },       

        };

    const [current, setCurrent] =useState(quotes[0]);

    const[ active, setActive] =  useState(0);
    

        const  handleClick = (e) =>{
            setCurrent(quotes[e.target.getAttribute("data-quote")]);
            setActive(e.target.getAttribute("data-quote"));
        }

return(
    <div className="quotes-container">
        <p className="quote-font">"{current.quote}"</p>
        <p className="client-font">-{current.client}</p>
        <div className="carousel-btn">
            {
                Object.keys(quotes).map(index => (
                    active?
                                <span onClick={e => handleClick(e)} data-quote={index} key={index}
                        />
                    :<span onClick={e => handleClick(e)} data-quote={index} key={index}
                    />
                ))
            
            }
        </div>
    </div>
)



}

export default Quotes;