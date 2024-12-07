"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const useDynamicPathState = () => {
    const [pageTitle, setPageTitle] = useState<string>("");
    const pathname = usePathname(); // usePathname from next/navigation
    const t = useTranslations("SideBarNav");

    useEffect(() => {
        switch (true) {
            case pathname.includes("/dashboard/stat"):
                setPageTitle(t("stat"));
                break;
            case pathname.includes("/dashboard/inventory/products"):
                setPageTitle(t("products"));
                break;
            case pathname.includes("/dashboard/inventory/categories"):
                setPageTitle(t("categories"));
                break;
            case pathname.includes("/dashboard/customers"):
                setPageTitle(t("customers"));
                break;
            case pathname.includes("/dashboard/suppliers"):
                setPageTitle(t("suppliers"));
                break;
            case pathname.includes("/dashboard/branches"):
                setPageTitle(t("branches"));
                break;
            case pathname.includes("/dashboard/promotions"):
                setPageTitle(t("promotions"));
                break;
            case pathname.includes("/dashboard/orders/sold"):
                setPageTitle(t("sales"));
                break;
            case pathname.includes("/dashboard/orders/returns"):
                setPageTitle(t("returns"));
                break;
            case pathname.includes("/dashboard/receipts/payed"):
                setPageTitle(t("receiptsPayed"));
                break;
            case pathname.includes("/dashboard/receipts/not-payed"):
                setPageTitle(t("receiptsNotPayed"));
                break;
            case pathname.includes("/dashboard/receipts/canceled"):
                setPageTitle(t("receiptsCanceled"));
                break;
            case pathname.includes("/dashboard/purchase-orders/payed"):
                setPageTitle(t("poPayed"));
                break;
            case pathname.includes("/dashboard/purchase-orders/not-payed"):
                setPageTitle(t("poNotPayed"));
                break;
            case pathname.includes("/dashboard/purchase-orders/canceled"):
                setPageTitle(t("poCanceled"));
                break;
            case pathname.includes("/dashboard/account"):
                setPageTitle(t("account"));
                break;
            case pathname.includes("/dashboard/establishment"):
                setPageTitle(t("establishment"));
                break;
            case pathname.includes("/dashboard/general"):
                setPageTitle(t("generalSettings"));
                break;
            case pathname.includes("/dashboard/inventory/general"):
                setPageTitle(t("generalManagement"));
                break;
            case pathname.includes("/dashboard/inventory/movements"):
                setPageTitle(t("inventoryMovement"));
                break;
            case pathname.includes("/dashboard/assets"):
                setPageTitle(t("assetsManagements"));
                break;
            default:
                setPageTitle(t("unknown"));
        }
    }, [pathname, t]);

    return pageTitle;
};

export default useDynamicPathState;
