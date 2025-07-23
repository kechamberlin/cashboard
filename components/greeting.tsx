import { getGeolocation, getWeather } from '@/hooks/use-weather';
import { Weather } from '@/lib/definitions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { GreetingSkeleton } from './skeletons';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function Greeting({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { data: geolocation } = useQuery({
    queryKey: ['geolocation'],
    queryFn: getGeolocation,
  });

  const {
    data: weather,
    error,
    isError,
    isPending,
  } = useQuery<Weather>({
    queryKey: ['weather', geolocation],
    queryFn: () => getWeather(geolocation),
    enabled: !!geolocation,
  });

  if (isPending) return <GreetingSkeleton />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Card className='w-full bg-cashboard-indigo-light shadow-none flex flex-col gap-2'>
      <CardHeader>
        <CardTitle className='flex gap-4 justify-center items-center'>
          {weather?.weatherCondition?.iconBaseUri && (
            <Image
              src={`${weather?.weatherCondition?.iconBaseUri || ''}.png`}
              alt='Weather Icon'
              width={65}
              height={65}
              priority
            />
          )}
          <div className='flex flex-col items-start'>
            <span className='text-white text-2xl'>
              {`${weather?.feelsLikeTemperature?.degrees}˚`}
            </span>
            <span className='text-white text-sm font-medium'>
              {`${weather?.weatherCondition?.description?.text}`}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='text-center text-white font-semibold'>
        {`Good morning, ${user?.name}!`}
      </CardContent>
    </Card>
  );
}
