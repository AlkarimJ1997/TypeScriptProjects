/*
-> Old way of doing things

import React, { FC } from 'react';

export const section: FC<{ title: string }> = ({ children, title }) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
};

export default section;
*/
import { ReactNode } from 'react';

type SectionProps = {
    title?: string;
    children: ReactNode;
};

export const Section = ({ children, title = 'My Subheading' }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    );
};

export default Section;
