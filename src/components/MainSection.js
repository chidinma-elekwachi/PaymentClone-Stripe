import React from 'react';
import './styles/MainSection.css';
import Header from './Header';
import phone1 from './images/hdrightphone.png';
import header1 from './images/header_disaplay.png';
import logos from './images/complogos.png';
import graphics from './images/payment_anime.jpeg'
import pay from './images/acceptPay1.png'
import paylogo from './images/paylogos.png'

const MainSection = () => (
  <section className="main-section">
    <div className='bkg_header'>
        <img src={header1} alt='spinning display' className='diagonal-image'></img>
        <Header />
        <div className='main_sec1'>
            <div className='head_texts'>
                <button id='urBtn2' className='hover-button'><a href="../App.js" className='sess_btn'>Sessions 2024 • Watch on demand</a></button>    
                <h1 id='head_h1'>Financial infrastructure for the internet</h1>
                <p id='head_p'>Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and grow revenue</p>
                <button className='myBtn hover-button'><a href='stripe.com'>Start now</a></button>
                <button className='myBtn2 hover-button'>Contact sales</button>
            </div>
            <img src={phone1} alt='phone visual' id='phone1'></img>
        </div>
        <img src={logos} alt='company logos' id='complogos'></img>
    </div>
    <div className='section2'>
        <section className='mytxts'>
            <h3 id='purple'>Modular solutions</h3>
            <h1>A fully integrated suite of financial and payments products</h1>
            <p>Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.</p>
        </section>
        <img src={graphics} alt='graphics' id='mygrapic'></img>
    </div>
    <div className='section2'>
        <section className='mytxts1'>
            <h3 id='pay_h3'><img src={paylogo} alt='payment logo' id='paylogo'></img>Payments</h3>
            <h2>Accept and optimize payments, globally</h2>
            <p>Increase authorization rates, optimize your checkout conversion, and offer local payment methods in every market.</p>
            <button className='purpbtn hover-button'><a href='../App.js'>Start with Payments</a></button>
        </section>
        <img src={pay} alt='graphics' id='mypay'></img>
    </div>

  </section>
);

export default MainSection;
