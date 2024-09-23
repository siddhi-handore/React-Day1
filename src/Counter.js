import React ,{ useState} from 'react';
export default function Counter()
{
    const[cnt,setcnt] = useState(0);
    function increment(){
        setcnt(cnt+1);
    }
    function reset(){
        setcnt(0);
    }
    function decrement(){
        if(cnt > 0)
        {
            setcnt(cnt-1);
        }
    }
    return(
        <div className="box">
            <div className="Disp-num">
                <h1>{cnt}</h1>
            </div>
            <div className="btn">
                <button onClick={increment} id="b1">+</button>
                <button onClick={reset} id="b2">Reset</button>
                <button onClick={decrement} id="b3">-</button>
            </div>
        </div>
    )
}