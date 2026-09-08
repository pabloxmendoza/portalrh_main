import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default function Index() {
    return (
        <>
            <Head title="Constancia" />
            <Card>
                <CardHeader>
                    <CardTitle>Constancias</CardTitle>
                </CardHeader>
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
