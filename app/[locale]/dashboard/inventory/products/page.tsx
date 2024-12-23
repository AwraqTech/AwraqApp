import Pagingation from '@/app/components/Pagingation'
import CreateProduct from '@/app/ui/Inventory/Products/CreateProduct'
import ModifyProduct from '@/app/ui/Inventory/Products/ModifyProduct'
import ProductsHeader from '@/app/ui/Inventory/Products/ProductsHeader'
import ProductsLists from '@/app/ui/Inventory/Products/ProductsLists'
import React from 'react'

export default function Products() {
  return (
    <div className='flex flex-col w-full max-w-[1490px] mx-auto gap-4 lg:px-0 px-4 py-4 lg:py-8'>
      <ModifyProduct />
      <CreateProduct />
      <ProductsHeader />
      <ProductsLists />
      <Pagingation />
    </div>
  );
}