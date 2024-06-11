import { useEffect, useState } from 'preact/hooks';
import { batteryIconFromLevel } from '../BatteryHelper';
import Icon from '@mdi/react';
import { batterySignal } from '../Signals';

export default function PhoneStatusBar() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div class={`flex justify-between items-center px-5 py-5 transition bg-transparent fixed top-0 h-7 w-full text-white text-sm`}>
        <div>
            <p class='font-bold'>{time}</p>
        </div>
        <div class='flex gap-2 items-center'>
            <div class='flex items-center gap-1'>
              <Icon path={batteryIconFromLevel(batterySignal.value.level, batterySignal.value.charging)!} horizontal size={0.8}/>
              <p>{batterySignal.value.level}%</p>
            </div>
        </div>
    </div>
  )
}
