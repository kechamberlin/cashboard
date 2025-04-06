import { CloudSun } from 'lucide-react';
import { Card, CardFooter, CardHeader, CardTitle } from './ui/card';

export function NavGreeting() {
  return (
    <Card className='@container/card bg-[#899eff]'>
      <CardHeader className='justify-center'>
        <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
          <CloudSun className='size-9 text-white ' />
        </CardTitle>
      </CardHeader>
      <CardFooter className='flex-col items-center gap-1.5 text-sm'>
        <div className='line-clamp-1 flex gap-2 font-semibold text-white'>
          Good morning, Kris!
        </div>
        <div className='text-gray-600 font-medium'>
          Partly cloudy weather today
        </div>
      </CardFooter>
    </Card>
  );
}
