import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import FaceEx from "../../img/facial_expression.png";
import HeadMov from "../../img/head_movement.png";
import EyeMov from "../../img/eye_movement.png";
import GendCust from "../../img/gender_customization.png";
import FaceAge from "../../img/face_aging.png";
import AnimeStyle from "../../img/anime_style.png";
import ProdAudio from "../../img/producing_audio.png";

function Cards() {
  return (
    <div className="cards">
      <h1>All features</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src={FaceEx}
              text="Facial Expression"
              label="FE"
              path="/animator"
            />
            <CardItem
              src={EyeMov}
              text="Eye Movement"
              label="EM"
              path="/animator"
            />

            <CardItem
              src={GendCust}
              text="Gender Customization"
              label="GC"
              path="/animator"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src={FaceAge}
              text="Face Aging"
              label="FA"
              path="/animator"
            />
            <CardItem
              src={AnimeStyle}
              text="Anime-Style Image"
              label="AS"
              path="/animator"
            />
            <CardItem
              src={ProdAudio}
              te