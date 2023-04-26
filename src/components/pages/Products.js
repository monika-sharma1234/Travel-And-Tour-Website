import React from "react";
import '../../components/pages/Products.css';

export default function Products() {
    return (
        <div className="content">
        <div id="details">
            <h2>Address: Mathura</h2>
            <address>A-17 Kadamb Vihar ranchi bangar Mathura,281006</address>
            <b>Contact Number: +918755441908</b>
            <b>Email: monika.sharma_cs20@gla.ac.in</b>
            <b>Social Accounts-</b>
            <a href="https://www.instagram.com/monika_sharma0803">
                <span className="sicon" style={{ position: "absolute", fontSize: "30px", color: "red", paddingLeft: "10px" }}>
                    <i className="fab fa-instagram"></i>
                </span>
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/monika-sharma-a69190219">
                <span className="sicon" style={{ position: "absolute", fontSize: "30px", color: "blue", paddingLeft: "20px" }}>
                    <i className="fab fa-linkedin"></i>
                </span>
            </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/monika-sharma1234">
                <span className="sicon" style={{ position: "absolute", fontSize: "30px", color: "black", paddingLeft: "30px" }}>
                    <i className="fab fa-github"></i>
                </span>
            </a>&nbsp;
        </div>

        <div className="container">
            <h2>Send Message</h2>
            <div className="form">
                <form>
                    Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="idBox" />
                    Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="nameBox" />
                    Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" id="emailBox" />
                    Message:&nbsp;<textarea id="textBox" rows="4" cols="50"></textarea>
                    <div class="btns">
                        <div class="btn">Insert</div>
                        <div class="btn">Read</div>
                        <div class="btn">Update</div>
                        <div class="btn">Delete</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}