import React from 'react';
import { render } from 'react-dom';

const App = () =>
{
    return (
        <div className="wrapper landing">
            <div className="header container">
                <a href="/" className="header-brand">
                    Double.Today
                </a>
                <div className="header-right">
                    <div className="header-item header-item__button">
                        Войти
                    </div>
                    <div className="header-item header-item__button header-item__button-outline">
                        Начать
                    </div>
                </div>
            </div>

            <div className="background background-up">
                <img className="background-image" src="dist/img/main.jpg" />
            </div>

            <section className="slide slide-main">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1 className="heading-light heading-strong">Лучшая возможность увеличить сбережения.</h1>
                            <p className="text-secondary"><a href="#">#удвой</a> свой капитал прямо сейчас</p>
                            <br />
                            <div className="button-group">
                                <a className="button button-rounded button-play"><i className="fa fa-play"></i> <span>Играть</span></a>
                                <a className="button button-rounded"><i className="fa fa-shapes"></i> <span>Демо</span></a>
                            </div>
                        </div>
                        <div className="col-6">
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="slide slide-features">
                <div className="container">
                    <div className="row slide-features__about">
                        <div className="col-6 slide-features__about-image">
                        </div>
                        <div className="col-6">
                            <h2 className="heading-light heading-strong">Об игре</h2>
                            <p className="text-description">
                                <span className="text-brand">Double.Today</span> — Игра для двоих человек. Первый игрок называется <b><em>Куратор</em></b> — человек, задающий правила игры и ставку. Соответственно второй человек — <b><em>Дублер</em></b>, его задача выполнить условия куратора. Если Дублер не выполняет условия Куратора, то Куратор получает <em>удвоенную</em> ставку. <a href="">Подробнее о правилах игры</a>
                            </p>
                        </div>
                    </div>

                    <br/>
                    
                    <h2 className="heading-light heading-strong">Особенности платформы</h2>
                    <div className="row">
                        <div className="col-4">
                            <div className="feature feature-safety">
                                <div className="fa fa-user-shield"></div>
                                <h3>Безопасно</h3>
                                <p className="text-secondary">Все ваши данные защищены по всем современным стандартам</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature feature-interesting">
                                <div className="fa fa-lightbulb"></div>
                                <h3>Затягивает</h3>
                                <p className="text-secondary">Вы играете и только от Вас зависит выиграете вы или нет</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature feature-support">
                                <div className="fa fa-american-sign-language-interpreting"></div>
                                <h3>Без границ</h3>
                                <p className="text-secondary">Проект постоянно развивается, уже завтра будет что-то новое</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

render(<App />, document.querySelector('.app'));