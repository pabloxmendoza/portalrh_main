import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Head title="Dashboard" />
                <Card>
                    <CardHeader>
                        <CardTitle>Datos Generales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className="col-span-3">
                                <p>Código</p>
                                <p className='font-medium'>7379</p>
                            </div>
                            <div>
                                <p>Nombre</p>
                                <p className='font-medium'>PABLO ALBERTO</p>
                            </div>
                            <div>
                                <p>Primer Apellido</p>
                                <p className='font-medium'>MENDOZA</p>
                            </div>
                            <div>
                                <p>Segundo Apellido</p>
                                <p className='font-medium'>LOPEZ</p>
                            </div>
                            <div>
                                <p>RFC</p>
                                <p className='font-medium'>MELP820904HF4</p>
                            </div>
                            <div className="col-span-2">
                                <p>CURP</p>
                                <p className='font-medium'>MELP820904HBSNPB08</p>
                            </div>
                            <div>
                                <p>Calle Principal</p>
                                <p className='font-medium'>AV. LA CIMA</p>
                            </div>
                            <div>
                                <p>Calle 1</p>
                                <p className='font-medium'>KILAUEA</p>
                            </div>
                            <div>
                                <p>Calle 2</p>
                                <p className='font-medium'>VESUBIO</p>
                            </div>
                            <div className="col-span-2">
                                <p>Colonia</p>
                                <p className='font-medium'>FRACCIONAMIENTO LA CIMA</p>
                            </div>
                            <div>
                                <p>CP</p>
                                <p className='font-medium'>23085</p>
                            </div>
                            <div>
                                <p>Núm. Exterior</p>
                                <p className='font-medium'>322</p>
                            </div>
                            <div className="col-span-2">
                                <p>Núm. Interior</p>
                                <p className='font-medium'>S/N</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
