import React from 'react';
import './services.css'

class Services extends React.Component
{
    render()
    {
        return(
            <div className="services">
                <h3>Services</h3>
                <h2 className="title">what we provide</h2>
                <div className="row">
                <div>
                    <span>
                        <i className="fas fa-mobile-alt" ></i>
                        <h2>Responsive</h2>
                        <p>Looks great on any screen</p>
                    </span>
                </div>
                <div>
                    <span>
                    <i className="fas fa-pencil-alt" ></i>
                    <h2>Designing</h2>
                        <p>fresly redesign for bootstrap</p>
                </span>
                </div>
                <div>
                    <span>
                        <i className="fas fa-thumbs-up" ></i>
                        <h2>Favourite</h2>
                        <p>all user likes my work</p>
                    </span>
                </div>
                <div>
                    <span>
                        <i className="fas fa-question" ></i>
                        <h2>Question</h2>
                        <p>i must give answer of your question</p>
                    </span>
                </div>

                </div>
            </div>
        );
    }
}

export default Services;