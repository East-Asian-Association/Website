import React, { Component } from 'react';
import './Article.css';

export class Asienkunskap extends Component {
  static displayName = Asienkunskap.name;

  render () {
    return (
      <div class="article-content">
        <h2>Kära basårare,</h2>
        <p>Vi på Östasiatiska föreningen vill hälsa dig välkommen till Linköpings Universitet, LiU, och framför allt till ditt år på Asienkunskap. Oavsett om du valt kinesiska eller japanska så hoppas vi att ni får en givande studieperiod. Vi är en ideell förening med syfta att främja kulturutbytet mellan studenter från Sverige och Nordostasien. Detta görs genom olika aktiviteter så som konversationspass, matlagningsevent och sittningar. Sedan flera år ligger det även på föreningens bord att anordna mottagningen för de blivande basårsstudenterna. Det är med detta uppdrag i åtanke som denna sida är skapad.</p>
        <p>För att kunna erbjuda en så bra mottagning som möjligt för de nya studenterna har vi numera ett utskott till föreningen vid namn TEKKEN, vars uppgift är att planera och utföra denna uppgift. Det är alltså till <a href="/tekken">TEKKEN</a> du ska vända dig om du har några frågor angående själva mottagningen.</p>          
        <p>För de allra flesta som kommer till LiU är den första studietiden en av de mer omvälvande perioderna i livet. Många byter stad och ska kanske för första gången i livet ansvara för ett eget boende. Utöver detta kommer de första veckorna innebära ett studietempo som antagligen kommer vara högre än det som känns igen från tidigare i skolan och ett schema fullt med aktiviteter. Vår del i denna process handlar om att göra denna spännande period så rik som möjligt och hjälpa till när problem uppstår. Kom därför ihåg att alla faddrar har valt att finnas där för er skull och tveka inte att fråga om ni behöver hjälp eller känner er osäkra.</p>
        <p>Ambitionen med dessa sidor är att underlätta övergångsprocessen och besvara några av de frågor nyblivna studenter kan fundera över. Vi har därför försökt samla den information vi tror är mest relevant, så som scheman, tips för bostadsletande, kontaktpersoner, nyttiga länkar med mera. Saknas information ska du inte tveka att höra av dig.</p>          
        <p>Vi hoppas att du kommer att trivas hos oss och vi i Östasiatiska föreningen ser fram emot att träffa er i augusti!</p>          
        <p>Vänligen <br></br> Östasiatiska föreningens styrelse</p>
      </div>
    );
  }
}
