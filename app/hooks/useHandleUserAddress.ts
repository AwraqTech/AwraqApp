"use client"

import { useCompleteInformation } from "../context/CompleteInformationContext";

export const useHandleUserAddress = () => {
    const { entityAddress, setEntityAddress } = useCompleteInformation();

    const country = entityAddress.country;
    const setCountry = (value: string) => setEntityAddress({ ...entityAddress, country: value });
    const city = entityAddress.city;
    const setCity = (value: string) => setEntityAddress({ ...entityAddress, city: value });
    const province = entityAddress.province;
    const setProvince = (value: string) => setEntityAddress({ ...entityAddress, province: value });
    const destric = entityAddress.destric;
    const setDestrict = (value: string) => setEntityAddress({ ...entityAddress, destric: value });
    const street = entityAddress.street;
    const setStreet = (value: string) => setEntityAddress({ ...entityAddress, street: value });
    const postalCode = entityAddress.postalCode;
    const setPostalCode = (value: string) => setEntityAddress({ ...entityAddress, postalCode: value });

    return {
        country,
        setCountry,
        city,
        setCity,
        province,
        setProvince,
        destric,
        setDestrict,
        street,
        setStreet,
        postalCode,
        setPostalCode
    };
};