export interface CircularProgressbarProps {
    value: number;
}

export interface NavItemProps {
    Icon: any;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export interface TransactionItemProps {
    image: any;
    title: string;
    percentage: number;
    totalAmount: number;
    amountSpent: number;
}

export interface TabProps {
    tabsList: string[];
}

export interface TabItemProps {
    isActive: boolean;
    tabName: string;
}


export interface IconProps {
    isActive: boolean;
}