import React, { Component } from 'react'
import './recentprojects.css'


export default class RecentProjects extends Component {
    render() {
        return (
            <div className="container">
                <p className="title" >Recent Projects</p>
                <div className="row1" >
                    <div className="project1">
                        <p className="desc">this project is first project</p>
                    </div>
                    <div className="project2" >
                        <p className="desc">this is second project of hte year</p>

                    </div>
                </div>
                <div className="row2">
                    <div className="project3">
                        <p className="desc">description for project 3</p>

                    </div>
                    <div className="project4">
                    <p className="desc">description for project 4</p>

                    </div>
                </div>

            </div>
        )
    }
}
