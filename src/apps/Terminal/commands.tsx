import { useState, useEffect } from "preact/hooks";
import { openApp } from "../../lib/AppsWindowsManager";
import apps from "../Apps";
import { noOs, pepsimode } from "../../Signals";
import Spinner from "./Spinner";


export const commands = [
    {
        name: 'help',
        Response: (props:{scroll:() => {}}) => {
            useEffect(() => {props.scroll()}, []);
            return <h1>
                <p className='gradient-text w-max'>========= List of commands =========</p>
                <p>• help <span className='text-gray-400'>- Get a list of commands</span></p>
                <p>• pepsi <span className='text-gray-400'>- Get a random pepsi image</span></p>
                <p>• neofetch <span className='text-gray-400'>- Get my main PC specs</span></p>
                <p>• htop <span className='text-gray-400'>- Show a fake htop</span></p>
                <p>• baguette <span className='text-gray-400'>- baget</span></p>
                <p>• thisyou <span className='text-gray-400'>- Remind you of something?</span></p>
                <p>• clear <span className='text-gray-400'>- Clear command history</span></p>
            </h1>
        }
    },
    {
        name: 'pepsi',
        Response: (props:{scroll:() => {}}) => {
            const [pic, setPic] = useState('');
            useEffect(() => {
                pepsimode.value = !pepsimode.value;
                console.log(pepsimode.value)
                fetch('https://api.pepsi.xshadow.xyz/pic').then(res => res.json()).then(data => {
                    setPic(data.url);
                }) 
            }, []);
            if (pic === '') return <p><Spinner/> Fetching a new Pepsi picture...</p>
            return <><img src={pic} alt="pepsi" onLoad={() => props.scroll()}/><p>🐈 Pepsi Mode {pepsimode.value ? 'enabled' : 'disabled'}. Meow!</p></>
        }
    }, 
    {
        name: 'neofetch',
        Response: (props:{scroll:() => {}}) => {
            // cat ascii art:
            const [uptime, setUptime] = useState('0 seconds');
            useEffect(() => {
                let delta = Math.abs(new Date().getTime() - 1405670400000) / 1000;
                const years = Math.floor(delta / 31536000);
                delta -= years * 31536000;
                const days = Math.floor(delta / 86400) % 365;
                delta -= days * 86400;
                const hours = Math.floor(delta / 3600) % 24;
                delta -= hours * 3600;
                const minutes = Math.floor(delta / 60) % 60;
                delta -= minutes * 60;
                const seconds = Math.floor(delta % 60);
                setUptime(`${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
                props.scroll();
            }, []);
            return <div className="flex flex-row gap-2">
                <p className="gradient-text w-1/2">
                ⠀⠀⠀⠀,_⠀⠀⠀⠀_,<br/>
                ⠀⠀⠀⠀|\\___//|<br/>
                ⠀⠀⠀⠀|=6⠀⠀ 6=|<br/>
                ⠀⠀⠀⠀\=._Y_.=/<br/>
                ⠀⠀⠀⠀⠀)⠀⠀`⠀⠀(⠀⠀⠀,<br/>
                ⠀⠀⠀⠀/⠀⠀⠀⠀⠀⠀\⠀⠀((<br/>
                ⠀⠀⠀⠀|⠀⠀⠀⠀⠀⠀|⠀⠀⠀))<br/>
                ⠀⠀⠀/|⠀|⠀⠀⠀|⠀|\_//<br/>
                ⠀⠀⠀\|⠀|._.|⠀|/-`<br/>
                ⠀⠀⠀⠀'"'⠀⠀⠀'"'<br/>
                </p>
                <p className="text-gray-300 w-1/2">
                    <span className="gradient-text">OS:</span> PepsiOS 1.1.2 x64<br/>
                    <span className="gradient-text">Host:</span> xshadow<br/>
                    <span className="gradient-text">Uptime:</span> {uptime}<br/>
                    <span className="gradient-text">Resolution:</span> {window.innerWidth}x{window.innerHeight}<br/>
                    <span className="gradient-text">CPU: </span> AMD Ryzen 7 7700 (16) @ 5.3GHz<br/>
                    <span className="gradient-text">GPU:</span> AMD Radeon RX 5700 XT<br/>
                    <span className="gradient-text">Memory:</span> 31864MB DDR5<br/>
                </p>
            </div>
        }
    },
    {
        name: 'htop',
        Response: () => {
            const [cpus, setCpus] = useState([...Array(10).keys()]);
            const POSSIBLE_PROCESSES = [
                {user: 'pepsi', command: './catto-downloader'},
                {user: 'pepsi', command: './infinite-treats-generator'},
                {user: 'bartosz1', command: './polish-cow'},
                {user: 'bartosz1', command: './intellij-idea --project=bmonitord'},
            ]

            const [process, setProcess] = useState(POSSIBLE_PROCESSES[0]);
            useEffect(() => {
                const interval = setInterval(() => {
                    setCpus([...Array(10).keys()].map(() => Math.floor(Math.random() * 100)));
                    setProcess(POSSIBLE_PROCESSES[Math.floor(Math.random() * POSSIBLE_PROCESSES.length)]);
                }, 2000);
                return () => clearInterval(interval);
            }, []);
            return <>
                <div class='grid grid-cols-1 md:grid-cols-2'>
                    {cpus.map((percentage, index) => {
                        return <p class='gradient-text'>{index}[{'|'.repeat(Math.floor(percentage*20/100))}<span class='invisible'>{'|'.repeat(20 - Math.floor(percentage*20/100))}</span>{percentage < 10 ? ' ' : ''}{percentage}%]</p>
                    })}
                </div>
                <div class='flex flex-col'>
                    <p class='gradient-text'>Mem[|||<span class='invisible'>|||||||||||||||||</span>6G/32G]</p>
                    <p class='gradient-text'>Swp[<span class='invisible'>|||||||||||||||||||||</span>0K/2G]</p>
                </div>
                <div class='flex gap-2 h-5 text-black mt-3'>
                    <div class='px-2 bg-orange-500'><p>Main</p></div>
                    <div class='px-2 bg-orange-500 opacity-50'><p>I/O</p></div>
                </div>
                <div class='px-2 grid grid-cols-12 gap-2 bg-orange-500 text-black  text-sm md:text-base'>
                    <p>PID</p>
                    <p class='col-span-2'>USER</p>
                    <p>CPU%</p>
                    <p>MEM%</p>
                    <p class='col-span-7'>Command</p>
                </div>
                <div class='px-2 grid grid-cols-12 gap-2 text-white text-xs md:text-sm'>
                    <p>1</p>
                    <p class='col-span-2'>{process.user}</p>
                    <p>{(cpus.reduce((a, b) => a + b, 0) / cpus.length).toFixed(1)}</p>
                    <p>0.1</p>
                    <p class='col-span-7'>{process.command}</p>
                </div>
            </>
        }
    },
    {
        name: 'ls',
        Response: () => {
            return <p><span className="gradient-text font-bold">apps pepsi-pics sideprojects</span> Portfolio.tsx</p>
        }
    },
    {
        name: 'rm -rf /',
        Response: () => {
            useEffect(() => {
                setTimeout(() => {noOs.value = true}, 500);
            }, []);
            return <></>
        }
    },
    {
        name: 'baguette',
        Response: (props:{scroll:() => {}}) => {
            return <img src="https://pngimg.com/uploads/baguette/baguette_PNG15.png" alt="baguette" onLoad={() => props.scroll()}/>
        }
    },
    {
        name: 'clear',
        Response: (props:{clear:() => {}}) => {
            useEffect(() => {props.clear()}, []);
            return <></>
        }
    },
    {
        name: 'version',
        Response: () => {
            useEffect(() => {
                openApp(apps.find((x) => x.name === 'os_about')!);
            }, []);
            return <></>
        }
    },
    {
        name: 'thisyou',
        Response: (props:{scroll:() => {}}) => {
            interface Ip {city: string|null, region: string, country_name: string, ip: string}
            const [ip, setIp] = useState<Ip>({city: null, region:'unknown', country_name:'unknown', ip:'unknown'});
            useEffect(() => {
                fetch('https://ipapi.co/json/').then(res => res.json()).then(data => {
                    setIp(data);
                    props.scroll();
                })
            }, []);
            if (!ip.city) return <p><Spinner/> Loading...</p>
            return <p>hey yo {ip.city} ({ip.region}), {ip.country_name} {ip.ip} remind u of something?</p>
        }
    },
    {
        name: 'about',
        Response: (props:{scroll:() => {}}) => {
            useEffect(() => {
                openApp(apps.find((x) => x.name === 'os_about')!);
                props.scroll();
            }, []);
            return <></>
        }
    },
    {
        name: 'sudo',
        Response: (props:{scroll:() => {}}) => {
            useEffect(() => {props.scroll()}, []);
            return <p>dont you dare</p>
        }
    },
]

export const autocomplete = (input:string) => {
    if (input === '') return '';
    const result = commands.filter(command => command.name.startsWith(input));
    if (result.length === 0) return '';
    return result[0].name.replace(input, '');
}