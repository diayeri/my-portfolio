import { Button } from '@/components/Button';
import { ArrowLeft } from 'lucide-react';
const Page404 = () => {
  return (
    <div className='px-20 text-center mt-60'>
      <h1 className='mb-4 text-4xl font-bold'>404</h1>
      <p className='mb-12 text-xl'>Page not found</p>
      <Button
        size='sm'
        iconLeft={<ArrowLeft />}
        onClick={() => window.history.back()}
      >
        Back
      </Button>
    </div>
  );
};

export default Page404;
