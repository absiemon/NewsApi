import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './spinner'
import propTypes from 'prop-types'

export default class AllNewsItems extends Component {
    
    // articles = [
    //     {
    //         "source": {
    //             "id": "news24",
    //             "name": "News24"
    //         },
    //         "author": "AFP",
    //         "title": "Paralysed Kiwi great Chris Cairns opens up on pain wrought by match-fixing trials",
    //         "description": "New Zealand cricket great Chris Cairns feels he can talk candidly about the pain of match-fixing allegations brought against him now that he has survived multiple health scares.",
    //         "url": "https://www.news24.com/sport/Cricket/paralysed-kiwi-great-chris-cairns-opens-up-on-pain-wrought-by-match-fixing-trials-20220502",
    //         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/11454/2f39c30e224b48d18c3def92f303a51c.jpg",
    //         "publishedAt": "2022-05-02T11:15:57+00:00",
    //         "content": "New Zealand cricket great Chris Cairns feels he can talk candidly about the pain of match-fixing allegations brought against him now that he has survived multiple health scares.\r\nThe former all-round… [+2879 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-sport",
    //             "name": "BBC Sport"
    //         },
    //         "author": "BBC Sport",
    //         "title": "Shane Warne memorial - watch & follow updates",
    //         "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
    //         "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
    //         "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
    //         "publishedAt": "2022-03-30T08:22:26.498888Z",
    //         "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]
    static defaultproptype={
      country:"in",
      pagesize:15,
      category:"general"

    }
  
    static propTypes={
      country: propTypes.string,
      pagesize: propTypes.number,
      category: propTypes.string
    }
    constructor(){
        super();
        this.state={
            articles: [""],//this.articles,//
            page:1,     // for next and prevoius page
            loading: false // when component loaded then loading icons will not be seen
        }
    }

    async componentDidMount(){  // it will run after the render function // with the help of this we are fatching data from news api
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18146180c1c547d9a865f6a250c79a71&pagesize=${this.props.pagesize}`;
        
        this.setState({ loading: true}); // before fetching the result loading will be true
        let data  = await fetch(url);  // will fetch the url and we also want ki jab tak ye url fetch nahi hota our function should wait so we use async await 
        let parsedData = await data.json();  // we want ki jo data aaye usse json main parse kar do and we also have to wait for this to happen
        // now we need to set this.state to parsedData
        this.setState ({articles: parsedData.articles, 
          totalResults: parsedData.totalResults,
          loading: false,
        
        });  // we want ki ab articles ke pass parsedData se jo artilces mil rahe hain wo aaye
        // Now we have seted artilces vlaue to the parsedData articles so we don't need articles array anymore and we can also set the initial vlaue 
        // of articles to null bcz after render componentDidMount automatically set the value of articles.

        // WE are storing totalResults bcz we want to manupulate the nextPage funtion (agar article availabe na hoto nextpage func kaam na kare)
        // with the help of totalResults we will get to know how many articles are comming with the url
    }

    NextPage = async ()=>{
      // totalResults/20 mujhe no of pages dega ,jitne hame available karane hain to show total results and agr jaise hi page next hote hote isse bada hua we don't have to do anything
      if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize))){
      // when we are clicking on the next button we have to change link i.e we have to change to page= page+1 and we can do with using &
    
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18146180c1c547d9a865f6a250c79a71&page=${this.state.page +1}&pagesize=${this.props.pagesize}`;
          this.setState({ loading: true});
          let data = await fetch(url);
          let parsedData = await data.json();
          console.log(parsedData);
          this.setState({
            page: this.state.page +1,
            articles: parsedData.articles,
            loading: false,

        })
    }

    }
    PrevPage = async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18146180c1c547d9a865f6a250c79a71&page=${this.state.page -1}&pagesize=${this.props.pagesize}`;
      this.setState({ loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page -1,
        articles: parsedData.articles,
        loading: false,
      })

    }

  render() {
      const { articles, page, loading} = this.state;  //object destructuring using this feature we don't have to write this.state.articles
    return (                               // direct articles we can use 
      <div className="container my-3">
            <h2> NewsTimes-Top Headlines</h2>
            {/* when loading is true tabhi hamme spinner ko dikhana hain aur loading will be true until and unless data is fetched  */}
            {loading && <Spinner/>}
            <div className="row my-3">
                {/* articles is an array that have news as a objects and we are traversing to each object and displaying to a column  */}
                 {/* we are taking key because in maping each element should hava a unique key i.e we can differentiate in each objects and their url is unique */}
                {!loading && articles.map((element)=>{            
                    return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title?element.title:"No title Available"} description={element.description?element.description:"No description Available"} imageUrl={element.urlToImage} newsUrl={element.url}/>
                           </div> 
                })} 
                
                {/* We have used ternary operator while setting the title bcz is my title comes null then hamm waha apne hissaab se kuch bhi display kara de */}
                {/* // col-md-4 means in a medium devices 4 col will be occupied out of 12 col grid properties of bootstrap */}
               
            </div>
            <div className="container d-flex flex-row-reverse" >
            <button  type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-outline-dark mx-4" onClick={this.NextPage}> &rarr; Next</button> 
            {/* disabled is a function which works on some condition &raar and &larr is the arrow symbol html */}
            <button disabled={page<=1} type="button" className="btn btn-outline-dark" onClick={this.PrevPage}> &larr; Previous</button>

            </div>
         
      </div>
    )
  }
}
