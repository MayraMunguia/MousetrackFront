import React from "react";


class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "hi",
      mouseX : "250px",
      mouseY: "630px"
    };
    // if (window.Chart) {
    //   parseOptions(Chart, chartOptions());
    // }
  }

  handleClick() {
    console.log('First Answer Clicked');
    this.setState({mouseX: "250px", mouseY: "630px"})
  }

  handleClick2() {
    console.log('Second Answer Clicked');
  }

    movement(e){
      let mx = e.clientX;
      let my = e.clientY;
      let msg = 'Mouse position:' + mx + ","+ my
      console.log(msg);
      this.setState({message: msg, mouseX: my, mouseY: mx})
    }
  
  componentDidMount() {

  }

  render() {
    const stylebod = {margin: '0px',padding: '0px'};
    return (
      <>

 <h1>{this.state.message}</h1>
  <body style={{margin: '0px',padding: '0px'}}>
    <canvas id="myCanvas" width="1200" height="600" style={{cursor: "none",zIndex:"1"}} onMouseMove={(e) =>{this.movement(e.nativeEvent)}}></canvas>
    <input type="button" onClick={() => {this.handleClick()}} style={{zIndex:"2", position:"absolute", top:"211px", left:"247px", width:"200px", height:"200px"}} value="Answer #1"/>
        <input type="button" onClick={() => {this.handleClick()}} style={{zIndex:"2", position:"absolute", top:"211px", right:"247px", width:"200px", height:"200px"}} value="Answer #2"/>
    
    
<img id="cursor" src=
"https://media.geeksforgeeks.org/wp-content/uploads/20200319212118/cursor2.png"
        style={{zIndex:"2", position:"absolute", top:this.state.mouseX, left:this.state.mouseY, width:"15px", height:"20px"}}/>
        
    
    
    
    </body>
    <script></script>
      </>
    );
  }
}

export default Index;
