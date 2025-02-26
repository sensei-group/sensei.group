import type {
    Block,
    ScreenfulBlock,
    ElementBlock,
} from '@hanzo/ui/blocks'

import SenseiLogo from '@/content/slides/companies/svg/hanzo'

export default {
    blockType: 'screenful',
    specifiers: 'vert-center',
    columnSpecifiers: ['vert-center mobile-vert-center'],
    contentColumns: [
        [
            {
                blockType: 'element',
                element: (
                    <div className='pt-20 h-full w-full flex flex-col items-center justify-center gap-10'>
                        <div className='hanzologo flex items-center justify-center w-full'>
                            <SenseiLogo />
                        </div>
                        <span className='text-[100px] 2xl:text-[180px] font-semibold font-sans hidden md:block'>
                            Sensei
                        </span>
                        <span className='text-4xl 2xl:text-5xl 2xl:leading-[79px] tracking-[0.16em] text-center font-normal font-sans'>
                            VENTURE BOLDLY. BECOME LEGENDARY.
                        </span>
                    </div>
                )
            } satisfies ElementBlock as Block,
        ]]
} satisfies ScreenfulBlock
