import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

class Filter extends Component {



    constructor(props){

        super(props);
       this.setBoolean=this.setBoolean.bind(this);

    
    }


    setButton(i){

    this.props.setYear(i);
         
   }


   setBoolean(key,value){

      console.log(key,value);

      if(key=='launch'){

        this.props.setLaunch(value);

      }else{
        this.props.setLanding(value);


      }
   
  }

   
    appendButton(){

       let str=[];
       let years=[];
       
       for(let i=2006;i<=2020;i++){

           let className="btn btn-success inline_button";

           if(i==this.props.year){
            className+=' active';

           }
            

           str.push(
            <button className={className}    onClick={()=>{this.setButton(i);}}>{i}</button>
          );

          if(i==2020){
            str.push(
                <div className="btn inline_button"  ></div>
              );
          }
       }

     return str;


    }

    render() {

        console.log("Filter",this.props);

        return (
            <div>

                <h4>Filters</h4>

        
    <div class="filter-title">
    <p>Launch Year</p>  
    <hr/>
      
       
          
                {
              

                this.appendButton()
            } 
               

            
               <p>Successful Launch</p>  
                 <hr/>
                 <button className={`btn btn-success inline_button ${this.props.launch===true?"active":""}` }  onClick={(e)=>{ 
                         e.preventDefault();this.setBoolean('launch',true)
                        }} >True</button>

                        <button className={`btn btn-success inline_button ${this.props.launch===false?"active":""}`}  onClick={(e)=>{ 
                         e.preventDefault();this.setBoolean('launch',false)
                        }} >False</button>
               
                 <p>Successful Landing</p>  
                 <hr/>

                   <button className={`btn btn-success inline_button ${this.props.landing===true?"active":""}`}  onClick={(e)=>{ 
                         e.preventDefault();this.setBoolean('landing',true)
                        }} >True</button>

                        <button className={`btn btn-success inline_button ${this.props.landing===false?"active":""}`}  onClick={(e)=>{ 
                         e.preventDefault();this.setBoolean('landing',false)
                        }} >False</button>
                
      
                <br/>
                <br/>
            </div>
            </div>  
        )
    }
}



export default Filter;