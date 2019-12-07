import React, {Component,useRef,useState,useCallback} from "react"
import produce from "immer"

const numRows=50;
const numCols=50;



const Wheel =()=>{
   const [grid,setGrid]=useState(()=>{
       var grid=[];
       for(let i=0;i<numRows;i++){
           grid.push(new Array(numCols).fill(0))
       }
       console.log(grid)
       return grid;
   
   })

   const [running,setRunning]=useState(false);
   const runningRef=useRef(running)

   const runSimulation=useCallback(()=>{
       if(!runningRef.current){
           return;
       }

       setGrid(grid=>{
           return produce(grid,gridCopy=>{

        
       
       let operations=[
           [1,1],
           [1,-1],
           [-1,1],
           [-1,-1],
           [1,0],
           [0,1],
           [0,-1],
           [-1,0],
       ]

       for(let i=0;i<numRows;i++){
           for(let j=0;j<numCols;j++){
               let neighbors=0;

               operations.forEach(([x,y])=>{
                   let newI=i+x;
                   let newJ=y+j;

                   if(newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols){
                            neighbors+=grid[newI][newJ]
                   }
               })

               if(neighbors > 3 || neighbors < 2){
                   gridCopy[i][j]=0
               }
               else if(grid[i][j] === 0 && neighbors === 3){
                   gridCopy[i][j]=1
               }
            
            }
        }  
        })
        })
    
            setTimeout(runSimulation,1000)
            
        },[])
    



        return(
            <React.Fragment>
       <h1>Wheel of LIfe</h1>
     <button onClick={()=>{
         setRunning(!running)
             if(!running){
                 runningRef.current=true;
                 runSimulation()
             }
         
     }}
     >
     {running ? 'stop' : 'start'}
     </button>
     <div style={{display:'grid',gridTemplateColumns:`repeat(${numCols},1fr)`}}>
     {grid.map((rows,y)=>(rows.map((cels,x)=>(
         <div key={`${y}-${x}`}
              style={{height:50,width:50,outline:'1px solid black',background:grid[y][x] ? 'pink' : undefined}}
              onClick={()=>{
                  const newGrid=produce((g,gCopy)=>{
                      g[y][x]=g[y][x] ? 0 : 1
                  })
                  setGrid(newGrid)
              }}
              >
              </div>
     ))))}
     </div>
    
            </React.Fragment>

        )
    
}


export default Wheel;