import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';

export function GreetingSkeleton() {
  return (
    <Card className='bg-cashboard-indigo-light shadow-none flex flex-col gap-2'>
      <CardHeader>
        <CardTitle className='flex gap-4 justify-center items-center'>
          <Skeleton className='h-16.25 w-16.25 rounded-full' />
          <div className='flex flex-col items-start gap-2'>
            <Skeleton className='h-8 w-12 rounded-full' />
            <Skeleton className='h-5 w-16 rounded-full' />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className='h-6 rounded-full' />
      </CardContent>
    </Card>
  );
}
