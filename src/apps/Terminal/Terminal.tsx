// @ts-nocheck
import { autocomplete, commands } from './commands';
import { useState, useId } from "preact/hooks";

import '../../style/index.css';
export default function Terminal() {
    const termId = useId();
    const termInputId = useId();
    const [inputData, setInputData] = useState('');
    const [completion, setCompletion] = useState('');
    const [history, setHistory] = useState([]);
    const [inputHistory, setInputHistory] = useState([]);
    const [historyCursor, setHistoryCursor] = useState(0);
    const inputHandler = (value:string) => {
        setInputData(value);
        setCompletion(autocomplete(value));
    }
    const focusInput = () => {  
      document.getElementById(termInputId).focus();
    }
    return (
      <div className="bg-zinc-900 w-full h-full" onClick={() => focusInput()}>
          <div className='flex flex-col justify-end text-sm' style={{fontFamily:'Terminal'}}>
            <div className='w-full p-3 text-white overflow-y-scroll noscrollbar max-h-[350px]' id={termId}>
              <p className='text-gray-400 mb-5'><span class='gradient-text'>Welcome to PortfoliOS 1.0.0 (x64)</span><br/><br/>
                * Website:  https://xshadow.xyz | https://maximlucas.dev<br/>
                * Support:  hello@xshadow.xyz
                </p>
              <p className='text-gray-500 text-xs'>(i) Type "help" to start! To type commands, click on "help" below. It's the input box!</p>
              {history.map((value) => {
                const Component = value;
                return <Component clear={() => {
                  setHistory([]);
                }} scroll={() => {
                  setTimeout(() => document.getElementById(termId).scrollTop = document.getElementById(termId).scrollHeight, 50);
                }}/>
              })}
              <p>
                visitor@maxluc:~$ 
                <input id={termInputId} className='ml-2 bg-transparent focus:outline-none' style={{width: inputData.length === 0 ? 1 : `${inputData.length}ch`}} placeholder='' value={inputData} onChange={(value) => {inputHandler(value.target.value)}} onKeyDown={(key) => {
                    switch (key.keyCode) { // Had to use deprecated keycode to prevent compatibility issues
                      case 13:
                        setInputData(inputData.toLowerCase().trimEnd());
                        const newInputHistory = [...inputHistory, inputData]; // Had to use this to avoid delays
                        setInputHistory(newInputHistory);
                        setHistoryCursor(newInputHistory.length);
                        if (inputData.length === 0) return;
                        const command = commands.filter((value) => value.name === inputData)[0];
                        const comp = () => {return <p>visitor@maxluc:~$ {inputData}</p>}
                        if (!command) {
                          setHistory([...history, comp, () => {return <p className='text-red-500'>{inputData}: command not found</p>}]);
                          setInputData('');
                        } else {
                          setHistory([...history, comp, command.Response]);
                          setInputData('');
                        }
                        setTimeout(() => document.getElementById(termId).scrollTop = document.getElementById(termId).scrollHeight, 100);
                        break;
                      case 38:
                        if (!inputHistory[historyCursor-1]) break;
                        setInputData(inputHistory[historyCursor-1]);
                        setHistoryCursor(historyCursor-1);
                        break;
                      case 40:
                        if (!inputHistory[historyCursor+1]) break;
                        setInputData(inputHistory[historyCursor+1]);
                        setHistoryCursor(historyCursor+1);
                        break;
                      default:
                        setHistoryCursor(inputHistory.length);
                        break;
                    }
                }}></input>
                <span className='text-gray-400 mr-1'>{completion}</span>
                <span className='blink'>▮</span>
              </p>
            </div>
          </div>
      </div>
    )
}
