"use cline"

import { useCompleteInformation } from '@/app/context/CompleteInformationContext';

export default function usePlanSelection() {
    const { 
        subscriptionPlan, 
        setSubscriptionPlan, 
        isVatRegistred 
    } = useCompleteInformation();

    const handlePlanSelection = (planName: string, planPrice: string, planDuration: string) => {
        setSubscriptionPlan({
            ...subscriptionPlan,
            planName,
            planPrice,
            planDuration
        });
    };

    const handleBranchesCounter = (value: number) => {
        setSubscriptionPlan({
            ...subscriptionPlan,
            numberOfBranches: value
        });
    };

    const handlePosDevicesCounter = (value: number) => {
        setSubscriptionPlan({
            ...subscriptionPlan,
            numberOfPosDevices: value
        });
    };

    return {
        isVatRegistred,
        handlePlanSelection,
        handleBranchesCounter,
        handlePosDevicesCounter
    };
}