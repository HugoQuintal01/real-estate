import React from "react";
import House01 from '../../assets/house-03.jpeg';
import House02 from '../../assets/house-04.jpeg';
import House03 from '../../assets/house-05.jpeg';
import House04 from '../../assets/house-06.jpeg';
import House05 from '../../assets/house-07.jpeg';
import House06 from '../../assets/house-08.jpeg';
import House07 from '../../assets/house-09.jpeg';
import House08 from '../../assets/house-10.jpeg';

const Highlight = () => {
    return( 
        <section className="highlight-section gridrow">
            <div className="highlight-title col-12">
                <h2 className="col-12">Mais procurados</h2>
                <span className="col-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, suscipit.</span>
            </div>
            <div className="highlight-list col-12">
                <div className="highlight-item col-8 col-t-6 col-d-3">
                    <div className="highlight-item-image">
                        <img src={House01} />
                    </div>
                    <div className="highlight-item-info">
                        <div className="highlight-item-title">
                            <h4>Porto Residence</h4>
                        </div>
                        <div className="highlight-item-price">
                            <span>179.000€</span>
                        </div>
                        <div className="highlight-item-more-info">
                            <span>T3</span>
                            <span>140 m2</span>
                            <span>2 wc</span>
                        </div>
                    </div>
                </div>
                <div className="highlight-item col-8 col-t-6 col-d-3">
                    <div className="highlight-item-image">
                        <img src={House02} />
                    </div>
                    <div className="highlight-item-info">
                        <div className="highlight-item-title">
                            <h4>Porto Residence</h4>
                        </div>
                        <div className="highlight-item-price">
                            <span>179.000€</span>
                        </div>
                        <div className="highlight-item-more-info">
                            <span>T3</span>
                            <span>140 m2</span>
                            <span>2 wc</span>
                        </div>
                    </div>
                </div>
                <div className="highlight-item col-8 col-t-6 col-d-3">
                    <div className="highlight-item-image">
                        <img src={House03} />
                    </div>
                    <div className="highlight-item-info">
                        <div className="highlight-item-title">
                            <h4>Porto Residence</h4>
                        </div>
                        <div className="highlight-item-price">
                            <span>179.000€</span>
                        </div>
                        <div className="highlight-item-more-info">
                            <span>T3</span>
                            <span>140 m2</span>
                            <span>2 wc</span>
                        </div>
                    </div>
                </div>
                <div className="highlight-item col-8 col-t-6 col-d-3">
                    <div className="highlight-item-image">
                        <img src={House04} />
                    </div>
                    <div className="highlight-item-info">
                        <div className="highlight-item-title">
                            <h4>Porto Residence</h4>
                        </div>
                        <div className="highlight-item-price">
                            <span>179.000€</span>
                        </div>
                        <div className="highlight-item-more-info">
                            <span>T3</span>
                            <span>140 m2</span>
                            <span>2 wc</span>
                        </div>
                    </div>
                </div>
                <div className="highlight-item col-8 col-t-6 col-d-3">
                    <div className="highlight-item-image">
                        <img src={House05} />
                    </div>
                    <div className="highlight-item-info">
                        <div className="highlight-item-title">
                            <h4>Porto Residence</h4>
                        </div>
                        <div className="highlight-item-price">
                            <span>179.000€</span>
                        </div>
                        <div className="highlight-item-more-info">
                            <span>T3</span>
                            <span>140 m2</span>
                            <span>2 wc</span>
                        </div>
                    </div>
                </div>
                <div className="highlight-item col-8 col-t-6 col-d-3">
                    <div className="highlight-item-image">
                        <img src={House06} />
                    </div>
                    <div className="highlight-item-info">
                        <div className="highlight-item-title">
                            <h4>Porto Residence</h4>
                        </div>
                        <div className="highlight-item-price">
                            <span>179.000€</span>
                        </div>
                        <div className="highlight-item-more-info">
                            <span>T3</span>
                            <span>140 m2</span>
                            <span>2 wc</span>
                        </div>
                    </div>
                </div>
                <div className="highlight-item col-8 col-t-6 col-d-3">
                    <div className="highlight-item-image">
                        <img src={House07} />
                    </div>
                    <div className="highlight-item-info">
                        <div className="highlight-item-title">
                            <h4>Porto Residence</h4>
                        </div>
                        <div className="highlight-item-price">
                            <span>179.000€</span>
                        </div>
                        <div className="highlight-item-more-info">
                            <span>T3</span>
                            <span>140 m2</span>
                            <span>2 wc</span>
                        </div>
                    </div>
                </div>
                <div className="highlight-item col-8 col-t-6 col-d-3">
                    <div className="highlight-item-image">
                        <img src={House08} />
                    </div>
                    <div className="highlight-item-info">
                        <div className="highlight-item-title">
                            <h4>Porto Residence</h4>
                        </div>
                        <div className="highlight-item-price">
                            <span>179.000€</span>
                        </div>
                        <div className="highlight-item-more-info">
                            <span>T3</span>
                            <span>140 m2</span>
                            <span>2 wc</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlight;