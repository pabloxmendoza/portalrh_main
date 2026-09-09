import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Index() {
    return (
        <>
            <Head title="Constancia" />
            <Card>
                <CardHeader>
                    <CardTitle>Constancias</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid gap-6'>
                        <div className='grid gap-2'>
                            <p>Código</p>
                            <p className='font-medium'>7379</p>
                        </div>
                        <div className='grid gap-2'>
                            <p>Nombre</p>
                            <p className='font-medium'>Pablo Alberto</p>

                            <p>Nombre</p>
                            <p className='font-medium'>Pablo Alberto</p>
                        </div>
                    </div>
                    
                </CardContent>
            </Card>
        </>    
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Constancia',
            href: '/constancia',
        },
    ],
};
