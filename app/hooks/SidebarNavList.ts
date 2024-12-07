"use client";

import { useTranslations } from "next-intl";

export const useSidebarNavLinks = () => {
    const t = useTranslations("SideBarNav");

    const mainNavLinks = [
        {
            title: t("stat"),
            link: '/dashboard/stat',
            icon: 'bar-chart-2-line',
            isCollapsable: false,
        },
        {
            title: t("inventory"),
            link: '/dashboard/inventory',
            icon: 'archive-stack-line',
            isCollapsable: true,
            subNav: [
                {
                    title: t("generalManagement"),
                    link: '/dashboard/inventory/general',
                },
                {
                    title: t("products"),
                    link: '/dashboard/inventory/products',
                },
                {
                    title: t("categories"),
                    link: '/dashboard/inventory/categories',
                },
                {
                    title: t("inventoryMovement"),
                    link: '/dashboard/inventory/movements',
                },
            ],
        },
        {
            title: t("customers"),
            link: '/dashboard/customers',
            icon: 'group-line',
            isCollapsable: false,
        },
        {
            title: t("suppliers"),
            link: '/dashboard/suppliers',
            icon: 'p2p-line',
            isCollapsable: false,
        },
        {
            title: t("branches"),
            link: '/dashboard/branches',
            icon: 'building-line',
            isCollapsable: false,
        },
        {
            title: t("promotions"),
            link: '/dashboard/promotions',
            icon: 'coupon-3-line',
            isCollapsable: false,
        },
        {
            title: t("orders"),
            link: '/dashboard/orders',
            icon: 'clipboard-line',
            isCollapsable: true,
            subNav: [
                {
                    title: t("sales"),
                    link: '/dashboard/orders/sold',
                },
                {
                    title: t("returns"),
                    link: '/dashboard/orders/returns',
                },
            ],
        },
    ];

    const financialLinks = [
        {
            title: t("receipts"),
            link: '/dashboard/receipts',
            icon: 'receipt-line',
            isCollapsable: true,
            subNav: [
                {
                    title: t("receiptsPayed"),
                    link: '/dashboard/receipts/payed',
                },
                {
                    title: t("receiptsNotPayed"),
                    link: '/dashboard/receipts/not-payed',
                },
                {
                    title: t("receiptsCanceled"),
                    link: '/dashboard/receipts/canceled',
                },
            ],
        },
        {
            title: t("purchaseOrders"),
            link: '/dashboard/purchase-orders',
            icon: 'swap-box-line',
            isCollapsable: true,
            subNav: [
                {
                    title: t("poPayed"),
                    link: '/dashboard/purchase-orders/payed',
                },
                {
                    title: t("poNotPayed"),
                    link: '/dashboard/purchase-orders/not-payed',
                },
                {
                    title: t("poCanceled"),
                    link: '/dashboard/purchase-orders/canceled',
                },
            ],
        },
        {
            title: t("assetsManagements"),
            link: '/dashboard/assets',
            icon: 'hand-coin-line',
            isCollapsable: false,
        }
    ];

    const settingLinks = [
        {
            title: t("account"),
            link: '/dashboard/account',
            icon: 'user-line',
            isCollapsable: false,
        },
        {
            title: t("establishment"),
            link: '/dashboard/establishment',
            icon: 'building-4-line',
            isCollapsable: false,
        },
        {
            title: t("generalSettings"),
            link: '/dashboard/general',
            icon: 'settings-3-line',
            isCollapsable: false,
        },
    ];

    return { mainNavLinks, financialLinks, settingLinks };
};
