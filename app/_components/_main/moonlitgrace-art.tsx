'use client';
import { useEffect, useRef } from 'react';

const MoonlitGraceArt = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const blocks = svgRef.current?.querySelectorAll('g[id^="block"]');

    const handleBlockHover = (e: Event) => {
      const target = e.target as SVGElement;
      if (target) {
        target.classList.add('transition-transform');
        target.classList.toggle('transform');
        target.classList.toggle('-translate-y-2');
        target.classList.toggle('-translate-x-1');
      }
    };

    blocks?.forEach((block) => {
      block.addEventListener('mouseenter', handleBlockHover);
    });

    return () => {
      blocks?.forEach((block) => {
        block.removeEventListener('mouseenter', handleBlockHover);
      });
    };
  }, [svgRef]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 750 438"
      className="h-auto w-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="moonlitgrace">
        <g id="grace">
          <g id="g">
            <g id="block">
              <g id="SvgjsSymbol1000">
                <path
                  id="Vector"
                  d="M51.7241 307.996L77.5862 295.065L103.448 307.996L77.5862 320.927L51.7241 307.996Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001">
                <path
                  id="Vector_2"
                  d="M51.7241 307.996L77.5862 320.927V346.789L51.7241 333.858V307.996Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002">
                <path
                  id="Vector_3"
                  d="M77.5862 320.927L103.448 307.996V333.858L77.5862 346.789V320.927Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_2">
              <g id="SvgjsSymbol1000_2">
                <path
                  id="Vector_4"
                  d="M77.5862 320.927L103.448 307.996L129.31 320.927L103.448 333.858L77.5862 320.927Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_2">
                <path
                  id="Vector_5"
                  d="M77.5862 320.927L103.448 333.858V359.72L77.5862 346.789V320.927Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_2">
                <path
                  id="Vector_6"
                  d="M103.448 333.858L129.31 320.927V346.789L103.448 359.72V333.858Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_3">
              <g id="SvgjsSymbol1000_3">
                <path
                  id="Vector_7"
                  d="M0 346.789L25.8621 333.858L51.7241 346.789L25.8621 359.72L0 346.789Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_3">
                <path
                  id="Vector_8"
                  d="M0 346.789L25.8621 359.72V385.582L0 372.651V346.789Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_3">
                <path
                  id="Vector_9"
                  d="M25.8621 359.72L51.7241 346.789V372.651L25.8621 385.582V359.72Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_4">
              <g id="SvgjsSymbol1000_4">
                <path
                  id="Vector_10"
                  d="M25.8621 359.72L51.7241 346.789L77.5862 359.72L51.7241 372.651L25.8621 359.72Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_4">
                <path
                  id="Vector_11"
                  d="M25.8621 359.72L51.7241 372.651V398.514L25.8621 385.582V359.72Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_4">
                <path
                  id="Vector_12"
                  d="M51.7241 372.651L77.5862 359.72V385.582L51.7241 398.514V372.651Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_5">
              <g id="SvgjsSymbol1000_5">
                <path
                  id="Vector_13"
                  d="M51.7241 372.651L77.5862 359.72L103.448 372.651L77.5862 385.582L51.7241 372.651Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_5">
                <path
                  id="Vector_14"
                  d="M51.7241 372.651L77.5862 385.582V411.445L51.7241 398.514V372.651Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_5">
                <path
                  id="Vector_15"
                  d="M77.5862 385.582L103.448 372.651V398.514L77.5862 411.445V385.582Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_6">
              <g id="SvgjsSymbol1000_6">
                <path
                  id="Vector_16"
                  d="M77.5862 385.582L103.448 372.651L129.31 385.582L103.448 398.514L77.5862 385.582Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_6">
                <path
                  id="Vector_17"
                  d="M77.5862 385.582L103.448 398.514V424.376L77.5862 411.445V385.582Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_6">
                <path
                  id="Vector_18"
                  d="M103.448 398.514L129.31 385.582V411.445L103.448 424.376V398.514Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_7">
              <g id="SvgjsSymbol1000_7">
                <path
                  id="Vector_19"
                  d="M103.448 398.514L129.31 385.582L155.172 398.514L129.31 411.445L103.448 398.514Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_7">
                <path
                  id="Vector_20"
                  d="M103.448 398.514L129.31 411.445V437.307L103.448 424.376V398.514Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_7">
                <path
                  id="Vector_21"
                  d="M129.31 411.445L155.172 398.514V424.376L129.31 437.307V411.445Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_8">
              <g id="SvgjsSymbol1000_8">
                <path
                  id="Vector_22"
                  d="M103.448 372.651L129.31 359.72L155.172 372.651L129.31 385.582L103.448 372.651Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_8">
                <path
                  id="Vector_23"
                  d="M103.448 372.651L129.31 385.582V411.445L103.448 398.514V372.651Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_8">
                <path
                  id="Vector_24"
                  d="M129.31 385.582L155.172 372.651V398.514L129.31 411.445V385.582Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_9">
              <g id="SvgjsSymbol1000_9">
                <path
                  id="Vector_25"
                  d="M103.448 346.789L129.31 333.858L155.172 346.789L129.31 359.72L103.448 346.789Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_9">
                <path
                  id="Vector_26"
                  d="M103.448 346.789L129.31 359.72V385.582L103.448 372.651V346.789Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_9">
                <path
                  id="Vector_27"
                  d="M129.31 359.72L155.172 346.789V372.651L129.31 385.582V359.72Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_10">
              <g id="SvgjsSymbol1000_10">
                <path
                  id="Vector_28"
                  d="M103.448 333.858L129.31 320.927L155.172 333.858L129.31 346.789L103.448 333.858Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_10">
                <path
                  id="Vector_29"
                  d="M103.448 333.858L129.31 346.789V372.651L103.448 359.72V333.858Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_10">
                <path
                  id="Vector_30"
                  d="M129.31 346.789L155.172 333.858V359.72L129.31 372.651V346.789Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_11">
              <g id="SvgjsSymbol1000_11">
                <path
                  id="Vector_31"
                  d="M0 320.927L25.8621 307.996L51.7241 320.927L25.8621 333.858L0 320.927Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_11">
                <path
                  id="Vector_32"
                  d="M0 320.927L25.8621 333.858V359.72L0 346.789V320.927Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_11">
                <path
                  id="Vector_33"
                  d="M25.8621 333.858L51.7241 320.927V346.789L25.8621 359.72V333.858Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_12">
              <g id="SvgjsSymbol1000_12">
                <path
                  id="Vector_34"
                  d="M0 295.065L25.8621 282.134L51.7241 295.065L25.8621 307.996L0 295.065Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_12">
                <path
                  id="Vector_35"
                  d="M0 295.065L25.8621 307.996V333.858L0 320.927V295.065Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_12">
                <path
                  id="Vector_36"
                  d="M25.8621 307.996L51.7241 295.065V320.927L25.8621 333.858V307.996Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_13">
              <g id="SvgjsSymbol1000_13">
                <path
                  id="Vector_37"
                  d="M0 269.203L25.8621 256.272L51.7241 269.203L25.8621 282.134L0 269.203Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_13">
                <path
                  id="Vector_38"
                  d="M0 269.203L25.8621 282.134V307.996L0 295.065V269.203Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_13">
                <path
                  id="Vector_39"
                  d="M25.8621 282.134L51.7241 269.203V295.065L25.8621 307.996V282.134Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_14">
              <g id="SvgjsSymbol1000_14">
                <path
                  id="Vector_40"
                  d="M0 243.341L25.8621 230.41L51.7241 243.341L25.8621 256.272L0 243.341Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_14">
                <path
                  id="Vector_41"
                  d="M0 243.341L25.8621 256.272V282.134L0 269.203V243.341Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_14">
                <path
                  id="Vector_42"
                  d="M25.8621 256.272L51.7241 243.341V269.203L25.8621 282.134V256.272Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_15">
              <g id="SvgjsSymbol1000_15">
                <path
                  id="Vector_43"
                  d="M0 217.479L25.8621 204.548L51.7241 217.479L25.8621 230.41L0 217.479Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_15">
                <path
                  id="Vector_44"
                  d="M0 217.479L25.8621 230.41V256.272L0 243.341V217.479Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_15">
                <path
                  id="Vector_45"
                  d="M25.8621 230.41L51.7241 217.479V243.341L25.8621 256.272V230.41Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_16">
              <g id="SvgjsSymbol1000_16">
                <path
                  id="Vector_46"
                  d="M25.8621 230.41L51.7241 217.479L77.5862 230.41L51.7241 243.341L25.8621 230.41Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_16">
                <path
                  id="Vector_47"
                  d="M25.8621 230.41L51.7241 243.341V269.203L25.8621 256.272V230.41Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_16">
                <path
                  id="Vector_48"
                  d="M51.7241 243.341L77.5862 230.41V256.272L51.7241 269.203V243.341Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_17">
              <g id="SvgjsSymbol1000_17">
                <path
                  id="Vector_49"
                  d="M51.7241 243.341L77.5862 230.41L103.448 243.341L77.5862 256.272L51.7241 243.341Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_17">
                <path
                  id="Vector_50"
                  d="M51.7241 243.341L77.5862 256.272V282.134L51.7241 269.203V243.341Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_17">
                <path
                  id="Vector_51"
                  d="M77.5862 256.272L103.448 243.341V269.203L77.5862 282.134V256.272Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_18">
              <g id="SvgjsSymbol1000_18">
                <path
                  id="Vector_52"
                  d="M77.5862 256.272L103.448 243.341L129.31 256.272L103.448 269.203L77.5862 256.272Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_18">
                <path
                  id="Vector_53"
                  d="M77.5862 256.272L103.448 269.203V295.065L77.5862 282.134V256.272Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_18">
                <path
                  id="Vector_54"
                  d="M103.448 269.203L129.31 256.272V282.134L103.448 295.065V269.203Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_19">
              <g id="SvgjsSymbol1000_19">
                <path
                  id="Vector_55"
                  d="M103.448 269.203L129.31 256.272L155.172 269.203L129.31 282.134L103.448 269.203Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_19">
                <path
                  id="Vector_56"
                  d="M103.448 269.203L129.31 282.134V307.996L103.448 295.065V269.203Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_19">
                <path
                  id="Vector_57"
                  d="M129.31 282.134L155.172 269.203V295.065L129.31 307.996V282.134Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="r">
            <g id="block_20">
              <g id="SvgjsSymbol1000_20">
                <path
                  id="Vector_58"
                  d="M175.862 359.203L201.724 346.272L227.586 359.203L201.724 372.134L175.862 359.203Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_20">
                <path
                  id="Vector_59"
                  d="M175.862 359.203L201.724 372.134V397.996L175.862 385.065V359.203Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_20">
                <path
                  id="Vector_60"
                  d="M201.724 372.134L227.586 359.203V385.065L201.724 397.996V372.134Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_21">
              <g id="SvgjsSymbol1000_21">
                <path
                  id="Vector_61"
                  d="M175.862 333.341L201.724 320.41L227.586 333.341L201.724 346.272L175.862 333.341Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_21">
                <path
                  id="Vector_62"
                  d="M175.862 333.341L201.724 346.272V372.134L175.862 359.203V333.341Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_21">
                <path
                  id="Vector_63"
                  d="M201.724 346.272L227.586 333.341V359.203L201.724 372.134V346.272Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_22">
              <g id="SvgjsSymbol1000_22">
                <path
                  id="Vector_64"
                  d="M175.862 307.479L201.724 294.548L227.586 307.479L201.724 320.41L175.862 307.479Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_22">
                <path
                  id="Vector_65"
                  d="M175.862 307.479L201.724 320.41V346.272L175.862 333.341V307.479Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_22">
                <path
                  id="Vector_66"
                  d="M201.724 320.41L227.586 307.479V333.341L201.724 346.272V320.41Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_23">
              <g id="SvgjsSymbol1000_23">
                <path
                  id="Vector_67"
                  d="M175.862 281.617L201.724 268.686L227.586 281.617L201.724 294.548L175.862 281.617Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_23">
                <path
                  id="Vector_68"
                  d="M175.862 281.617L201.724 294.548V320.41L175.862 307.479V281.617Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_23">
                <path
                  id="Vector_69"
                  d="M201.724 294.548L227.586 281.617V307.479L201.724 320.41V294.548Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_24">
              <g id="SvgjsSymbol1000_24">
                <path
                  id="Vector_70"
                  d="M175.862 255.755L201.724 242.824L227.586 255.755L201.724 268.686L175.862 255.755Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_24">
                <path
                  id="Vector_71"
                  d="M175.862 255.755L201.724 268.686V294.548L175.862 281.617V255.755Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_24">
                <path
                  id="Vector_72"
                  d="M201.724 268.686L227.586 255.755V281.617L201.724 294.548V268.686Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_25">
              <g id="SvgjsSymbol1000_25">
                <path
                  id="Vector_73"
                  d="M253.448 294.548L279.31 281.617L305.172 294.548L279.31 307.479L253.448 294.548Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_25">
                <path
                  id="Vector_74"
                  d="M253.448 294.548L279.31 307.479V333.341L253.448 320.41V294.548Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_25">
                <path
                  id="Vector_75"
                  d="M279.31 307.479L305.172 294.548V320.41L279.31 333.341V307.479Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_26">
              <g id="SvgjsSymbol1000_26">
                <path
                  id="Vector_76"
                  d="M227.586 333.341L253.448 320.41L279.31 333.341L253.448 346.272L227.586 333.341Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_26">
                <path
                  id="Vector_77"
                  d="M227.586 333.341L253.448 346.272V372.134L227.586 359.203V333.341Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_26">
                <path
                  id="Vector_78"
                  d="M253.448 346.272L279.31 333.341V359.203L253.448 372.134V346.272Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_27">
              <g id="SvgjsSymbol1000_27">
                <path
                  id="Vector_79"
                  d="M253.448 397.996L279.31 385.065L305.172 397.996L279.31 410.927L253.448 397.996Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_27">
                <path
                  id="Vector_80"
                  d="M253.448 397.996L279.31 410.927V436.789L253.448 423.858V397.996Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_27">
                <path
                  id="Vector_81"
                  d="M279.31 410.927L305.172 397.996V423.858L279.31 436.789V410.927Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_28">
              <g id="SvgjsSymbol1000_28">
                <path
                  id="Vector_82"
                  d="M253.448 372.134L279.31 359.203L305.172 372.134L279.31 385.065L253.448 372.134Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_28">
                <path
                  id="Vector_83"
                  d="M253.448 372.134L279.31 385.065V410.927L253.448 397.996V372.134Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_28">
                <path
                  id="Vector_84"
                  d="M279.31 385.065L305.172 372.134V397.996L279.31 410.927V385.065Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_29">
              <g id="SvgjsSymbol1000_29">
                <path
                  id="Vector_85"
                  d="M175.862 229.893L201.724 216.962L227.586 229.893L201.724 242.824L175.862 229.893Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_29">
                <path
                  id="Vector_86"
                  d="M175.862 229.893L201.724 242.824V268.686L175.862 255.755V229.893Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_29">
                <path
                  id="Vector_87"
                  d="M201.724 242.824L227.586 229.893V255.755L201.724 268.686V242.824Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_30">
              <g id="SvgjsSymbol1000_30">
                <path
                  id="Vector_88"
                  d="M201.724 242.824L227.586 229.893L253.448 242.824L227.586 255.755L201.724 242.824Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_30">
                <path
                  id="Vector_89"
                  d="M201.724 242.824L227.586 255.755V281.617L201.724 268.686V242.824Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_30">
                <path
                  id="Vector_90"
                  d="M227.586 255.755L253.448 242.824V268.686L227.586 281.617V255.755Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_31">
              <g id="SvgjsSymbol1000_31">
                <path
                  id="Vector_91"
                  d="M227.586 255.755L253.448 242.824L279.31 255.755L253.448 268.686L227.586 255.755Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_31">
                <path
                  id="Vector_92"
                  d="M227.586 255.755L253.448 268.686V294.548L227.586 281.617V255.755Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_31">
                <path
                  id="Vector_93"
                  d="M253.448 268.686L279.31 255.755V281.617L253.448 294.548V268.686Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_32">
              <g id="SvgjsSymbol1000_32">
                <path
                  id="Vector_94"
                  d="M253.448 268.686L279.31 255.755L305.172 268.686L279.31 281.617L253.448 268.686Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_32">
                <path
                  id="Vector_95"
                  d="M253.448 268.686L279.31 281.617V307.479L253.448 294.548V268.686Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_32">
                <path
                  id="Vector_96"
                  d="M279.31 281.617L305.172 268.686V294.548L279.31 307.479V281.617Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="a">
            <g id="block_33">
              <g id="SvgjsSymbol1000_33">
                <path
                  id="Vector_97"
                  d="M336.207 372.134L362.069 359.203L387.931 372.134L362.069 385.065L336.207 372.134Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_33">
                <path
                  id="Vector_98"
                  d="M336.207 372.134L362.069 385.065V410.927L336.207 397.996V372.134Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_33">
                <path
                  id="Vector_99"
                  d="M362.069 385.065L387.931 372.134V397.996L362.069 410.927V385.065Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_34">
              <g id="SvgjsSymbol1000_34">
                <path
                  id="Vector_100"
                  d="M336.207 346.272L362.069 333.341L387.931 346.272L362.069 359.203L336.207 346.272Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_34">
                <path
                  id="Vector_101"
                  d="M336.207 346.272L362.069 359.203V385.065L336.207 372.134V346.272Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_34">
                <path
                  id="Vector_102"
                  d="M362.069 359.203L387.931 346.272V372.134L362.069 385.065V359.203Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_35">
              <g id="SvgjsSymbol1000_35">
                <path
                  id="Vector_103"
                  d="M336.207 320.41L362.069 307.479L387.931 320.41L362.069 333.341L336.207 320.41Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_35">
                <path
                  id="Vector_104"
                  d="M336.207 320.41L362.069 333.341V359.203L336.207 346.272V320.41Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_35">
                <path
                  id="Vector_105"
                  d="M362.069 333.341L387.931 320.41V346.272L362.069 359.203V333.341Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_36">
              <g id="SvgjsSymbol1000_36">
                <path
                  id="Vector_106"
                  d="M336.207 294.548L362.069 281.617L387.931 294.548L362.069 307.479L336.207 294.548Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_36">
                <path
                  id="Vector_107"
                  d="M336.207 294.548L362.069 307.479V333.341L336.207 320.41V294.548Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_36">
                <path
                  id="Vector_108"
                  d="M362.069 307.479L387.931 294.548V320.41L362.069 333.341V307.479Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_37">
              <g id="SvgjsSymbol1000_37">
                <path
                  id="Vector_109"
                  d="M362.069 281.617L387.931 268.686L413.793 281.617L387.931 294.548L362.069 281.617Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_37">
                <path
                  id="Vector_110"
                  d="M362.069 281.617L387.931 294.548V320.41L362.069 307.479V281.617Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_37">
                <path
                  id="Vector_111"
                  d="M387.931 294.548L413.793 281.617V307.479L387.931 320.41V294.548Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_38">
              <g id="SvgjsSymbol1000_38">
                <path
                  id="Vector_112"
                  d="M387.931 294.548L413.793 281.617L439.655 294.548L413.793 307.479L387.931 294.548Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_38">
                <path
                  id="Vector_113"
                  d="M387.931 294.548L413.793 307.479V333.341L387.931 320.41V294.548Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_38">
                <path
                  id="Vector_114"
                  d="M413.793 307.479L439.655 294.548V320.41L413.793 333.341V307.479Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_39">
              <g id="SvgjsSymbol1000_39">
                <path
                  id="Vector_115"
                  d="M375 359.203L400.862 346.272L426.724 359.203L400.862 372.134L375 359.203Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_39">
                <path
                  id="Vector_116"
                  d="M375 359.203L400.862 372.134V397.996L375 385.065V359.203Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_39">
                <path
                  id="Vector_117"
                  d="M400.862 372.134L426.724 359.203V385.065L400.862 397.996V372.134Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_40">
              <g id="SvgjsSymbol1000_40">
                <path
                  id="Vector_118"
                  d="M413.793 397.996L439.655 385.065L465.517 397.996L439.655 410.927L413.793 397.996Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_40">
                <path
                  id="Vector_119"
                  d="M413.793 397.996L439.655 410.927V436.789L413.793 423.858V397.996Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_40">
                <path
                  id="Vector_120"
                  d="M439.655 410.927L465.517 397.996V423.858L439.655 436.789V410.927Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_41">
              <g id="SvgjsSymbol1000_41">
                <path
                  id="Vector_121"
                  d="M413.793 372.134L439.655 359.203L465.517 372.134L439.655 385.065L413.793 372.134Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_41">
                <path
                  id="Vector_122"
                  d="M413.793 372.134L439.655 385.065V410.927L413.793 397.996V372.134Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_41">
                <path
                  id="Vector_123"
                  d="M439.655 385.065L465.517 372.134V397.996L439.655 410.927V385.065Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_42">
              <g id="SvgjsSymbol1000_42">
                <path
                  id="Vector_124"
                  d="M413.793 346.272L439.655 333.341L465.517 346.272L439.655 359.203L413.793 346.272Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_42">
                <path
                  id="Vector_125"
                  d="M413.793 346.272L439.655 359.203V385.065L413.793 372.134V346.272Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_42">
                <path
                  id="Vector_126"
                  d="M439.655 359.203L465.517 346.272V372.134L439.655 385.065V359.203Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_43">
              <g id="SvgjsSymbol1000_43">
                <path
                  id="Vector_127"
                  d="M413.793 333.341L439.655 320.41L465.517 333.341L439.655 346.272L413.793 333.341Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_43">
                <path
                  id="Vector_128"
                  d="M413.793 333.341L439.655 346.272V372.134L413.793 359.203V333.341Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_43">
                <path
                  id="Vector_129"
                  d="M439.655 346.272L465.517 333.341V359.203L439.655 372.134V346.272Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="c">
            <g id="block_44">
              <g id="SvgjsSymbol1000_44">
                <path
                  id="Vector_130"
                  d="M491.379 332.824L517.241 319.893L543.103 332.824L517.241 345.755L491.379 332.824Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_44">
                <path
                  id="Vector_131"
                  d="M491.379 332.824L517.241 345.755V371.617L491.379 358.686V332.824Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_44">
                <path
                  id="Vector_132"
                  d="M517.241 345.755L543.103 332.824V358.686L517.241 371.617V345.755Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_45">
              <g id="SvgjsSymbol1000_45">
                <path
                  id="Vector_133"
                  d="M491.379 306.962L517.241 294.031L543.103 306.962L517.241 319.893L491.379 306.962Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_45">
                <path
                  id="Vector_134"
                  d="M491.379 306.962L517.241 319.893V345.755L491.379 332.824V306.962Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_45">
                <path
                  id="Vector_135"
                  d="M517.241 319.893L543.103 306.962V332.824L517.241 345.755V319.893Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_46">
              <g id="SvgjsSymbol1000_46">
                <path
                  id="Vector_136"
                  d="M491.379 281.1L517.241 268.169L543.103 281.1L517.241 294.031L491.379 281.1Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_46">
                <path
                  id="Vector_137"
                  d="M491.379 281.1L517.241 294.031V319.893L491.379 306.962V281.1Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_46">
                <path
                  id="Vector_138"
                  d="M517.241 294.031L543.103 281.1V306.962L517.241 319.893V294.031Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_47">
              <g id="SvgjsSymbol1000_47">
                <path
                  id="Vector_139"
                  d="M491.379 255.238L517.241 242.307L543.103 255.238L517.241 268.169L491.379 255.238Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_47">
                <path
                  id="Vector_140"
                  d="M491.379 255.238L517.241 268.169V294.031L491.379 281.1V255.238Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_47">
                <path
                  id="Vector_141"
                  d="M517.241 268.169L543.103 255.238V281.1L517.241 294.031V268.169Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_48">
              <g id="SvgjsSymbol1000_48">
                <path
                  id="Vector_142"
                  d="M491.379 229.376L517.241 216.445L543.103 229.376L517.241 242.307L491.379 229.376Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_48">
                <path
                  id="Vector_143"
                  d="M491.379 229.376L517.241 242.307V268.169L491.379 255.238V229.376Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_48">
                <path
                  id="Vector_144"
                  d="M517.241 242.307L543.103 229.376V255.238L517.241 268.169V242.307Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_49">
              <g id="SvgjsSymbol1000_49">
                <path
                  id="Vector_145"
                  d="M517.241 216.445L543.103 203.514L568.965 216.445L543.103 229.376L517.241 216.445Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_49">
                <path
                  id="Vector_146"
                  d="M517.241 216.445L543.103 229.376V255.238L517.241 242.307V216.445Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_49">
                <path
                  id="Vector_147"
                  d="M543.103 229.376L568.965 216.445V242.307L543.103 255.238V229.376Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_50">
              <g id="SvgjsSymbol1000_50">
                <path
                  id="Vector_148"
                  d="M543.103 229.376L568.965 216.445L594.828 229.376L568.965 242.307L543.103 229.376Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_50">
                <path
                  id="Vector_149"
                  d="M543.103 229.376L568.965 242.307V268.169L543.103 255.238V229.376Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_50">
                <path
                  id="Vector_150"
                  d="M568.965 242.307L594.828 229.376V255.238L568.965 268.169V242.307Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_51">
              <g id="SvgjsSymbol1000_51">
                <path
                  id="Vector_151"
                  d="M568.965 268.169L594.828 255.238L620.69 268.169L594.828 281.1L568.965 268.169Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_51">
                <path
                  id="Vector_152"
                  d="M568.965 268.169L594.828 281.1V306.962L568.965 294.031V268.169Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_51">
                <path
                  id="Vector_153"
                  d="M594.828 281.1L620.69 268.169V294.031L594.828 306.962V281.1Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_52">
              <g id="SvgjsSymbol1000_52">
                <path
                  id="Vector_154"
                  d="M517.241 371.617L543.103 358.686L568.965 371.617L543.103 384.548L517.241 371.617Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_52">
                <path
                  id="Vector_155"
                  d="M517.241 371.617L543.103 384.548V410.41L517.241 397.479V371.617Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_52">
                <path
                  id="Vector_156"
                  d="M543.103 384.548L568.965 371.617V397.479L543.103 410.41V384.548Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_53">
              <g id="SvgjsSymbol1000_53">
                <path
                  id="Vector_157"
                  d="M543.103 384.548L568.965 371.617L594.828 384.548L568.965 397.479L543.103 384.548Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_53">
                <path
                  id="Vector_158"
                  d="M543.103 384.548L568.965 397.479V423.341L543.103 410.41V384.548Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_53">
                <path
                  id="Vector_159"
                  d="M568.965 397.479L594.828 384.548V410.41L568.965 423.341V397.479Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_54">
              <g id="SvgjsSymbol1000_54">
                <path
                  id="Vector_160"
                  d="M568.965 242.307L594.828 229.376L620.69 242.307L594.828 255.238L568.965 242.307Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_54">
                <path
                  id="Vector_161"
                  d="M568.965 242.307L594.828 255.238V281.1L568.965 268.169V242.307Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_54">
                <path
                  id="Vector_162"
                  d="M594.828 255.238L620.69 242.307V268.169L594.828 281.1V255.238Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_55">
              <g id="SvgjsSymbol1000_55">
                <path
                  id="Vector_163"
                  d="M568.965 397.479L594.828 384.548L620.69 397.479L594.828 410.41L568.965 397.479Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_55">
                <path
                  id="Vector_164"
                  d="M568.965 397.479L594.828 410.41V436.272L568.965 423.341V397.479Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_55">
                <path
                  id="Vector_165"
                  d="M594.828 410.41L620.69 397.479V423.341L594.828 436.272V410.41Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_56">
              <g id="SvgjsSymbol1000_56">
                <path
                  id="Vector_166"
                  d="M568.965 371.617L594.828 358.686L620.69 371.617L594.828 384.548L568.965 371.617Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_56">
                <path
                  id="Vector_167"
                  d="M568.965 371.617L594.828 384.548V410.41L568.965 397.479V371.617Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_56">
                <path
                  id="Vector_168"
                  d="M594.828 384.548L620.69 371.617V397.479L594.828 410.41V384.548Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="e">
            <g id="block_57">
              <g id="SvgjsSymbol1000_57">
                <path
                  id="Vector_169"
                  d="M646.552 372.651L672.414 359.72L698.276 372.651L672.414 385.582L646.552 372.651Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_57">
                <path
                  id="Vector_170"
                  d="M646.552 372.651L672.414 385.582V411.445L646.552 398.513V372.651Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_57">
                <path
                  id="Vector_171"
                  d="M672.414 385.582L698.276 372.651V398.513L672.414 411.445V385.582Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_58">
              <g id="SvgjsSymbol1000_58">
                <path
                  id="Vector_172"
                  d="M646.552 346.789L672.414 333.858L698.276 346.789L672.414 359.72L646.552 346.789Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_58">
                <path
                  id="Vector_173"
                  d="M646.552 346.789L672.414 359.72V385.582L646.552 372.651V346.789Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_58">
                <path
                  id="Vector_174"
                  d="M672.414 359.72L698.276 346.789V372.651L672.414 385.582V359.72Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_59">
              <g id="SvgjsSymbol1000_59">
                <path
                  id="Vector_175"
                  d="M672.414 385.582L698.276 372.651L724.138 385.582L698.276 398.513L672.414 385.582Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_59">
                <path
                  id="Vector_176"
                  d="M672.414 385.582L698.276 398.513V424.376L672.414 411.445V385.582Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_59">
                <path
                  id="Vector_177"
                  d="M698.276 398.513L724.138 385.582V411.445L698.276 424.376V398.513Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_60">
              <g id="SvgjsSymbol1000_60">
                <path
                  id="Vector_178"
                  d="M698.276 398.514L724.138 385.582L750 398.514L724.138 411.445L698.276 398.514Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_60">
                <path
                  id="Vector_179"
                  d="M698.276 398.514L724.138 411.445V437.307L698.276 424.376V398.514Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_60">
                <path
                  id="Vector_180"
                  d="M724.138 411.445L750 398.514V424.376L724.138 437.307V411.445Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_61">
              <g id="SvgjsSymbol1000_61">
                <path
                  id="Vector_181"
                  d="M646.552 320.927L672.414 307.996L698.276 320.927L672.414 333.858L646.552 320.927Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_61">
                <path
                  id="Vector_182"
                  d="M646.552 320.927L672.414 333.858V359.72L646.552 346.789V320.927Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_61">
                <path
                  id="Vector_183"
                  d="M672.414 333.858L698.276 320.927V346.789L672.414 359.72V333.858Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_62">
              <g id="SvgjsSymbol1000_62">
                <path
                  id="Vector_184"
                  d="M672.414 333.858L698.276 320.927L724.138 333.858L698.276 346.789L672.414 333.858Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_62">
                <path
                  id="Vector_185"
                  d="M672.414 333.858L698.276 346.789V372.651L672.414 359.72V333.858Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_62">
                <path
                  id="Vector_186"
                  d="M698.276 346.789L724.138 333.858V359.72L698.276 372.651V346.789Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_63">
              <g id="SvgjsSymbol1000_63">
                <path
                  id="Vector_187"
                  d="M698.276 346.789L724.138 333.858L750 346.789L724.138 359.72L698.276 346.789Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_63">
                <path
                  id="Vector_188"
                  d="M698.276 346.789L724.138 359.72V385.582L698.276 372.651V346.789Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_63">
                <path
                  id="Vector_189"
                  d="M724.138 359.72L750 346.789V372.651L724.138 385.582V359.72Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_64">
              <g id="SvgjsSymbol1000_64">
                <path
                  id="Vector_190"
                  d="M646.552 295.065L672.414 282.134L698.276 295.065L672.414 307.996L646.552 295.065Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_64">
                <path
                  id="Vector_191"
                  d="M646.552 295.065L672.414 307.996V333.858L646.552 320.927V295.065Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_64">
                <path
                  id="Vector_192"
                  d="M672.414 307.996L698.276 295.065V320.927L672.414 333.858V307.996Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_65">
              <g id="SvgjsSymbol1000_65">
                <path
                  id="Vector_193"
                  d="M646.552 269.203L672.414 256.272L698.276 269.203L672.414 282.134L646.552 269.203Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_65">
                <path
                  id="Vector_194"
                  d="M646.552 269.203L672.414 282.134V307.996L646.552 295.065V269.203Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_65">
                <path
                  id="Vector_195"
                  d="M672.414 282.134L698.276 269.203V295.065L672.414 307.996V282.134Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_66">
              <g id="SvgjsSymbol1000_66">
                <path
                  id="Vector_196"
                  d="M672.414 282.134L698.276 269.203L724.138 282.134L698.276 295.065L672.414 282.134Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_66">
                <path
                  id="Vector_197"
                  d="M672.414 282.134L698.276 295.065V320.927L672.414 307.996V282.134Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_66">
                <path
                  id="Vector_198"
                  d="M698.276 295.065L724.138 282.134V307.996L698.276 320.927V295.065Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_67">
              <g id="SvgjsSymbol1000_67">
                <path
                  id="Vector_199"
                  d="M698.276 295.065L724.138 282.134L750 295.065L724.138 307.996L698.276 295.065Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_67">
                <path
                  id="Vector_200"
                  d="M698.276 295.065L724.138 307.996V333.858L698.276 320.927V295.065Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_67">
                <path
                  id="Vector_201"
                  d="M724.138 307.996L750 295.065V320.927L724.138 333.858V307.996Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="moonlit">
          <g id="m">
            <g id="block_68">
              <g id="SvgjsSymbol1000_68">
                <path
                  id="Vector_202"
                  d="M0 111.486L20.2703 101.351L40.5405 111.486L20.2703 121.622L0 111.486Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_68">
                <path
                  id="Vector_203"
                  d="M0 111.486L20.2703 121.622V141.892L0 131.757V111.486Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_68">
                <path
                  id="Vector_204"
                  d="M20.2703 121.622L40.5405 111.486V131.757L20.2703 141.892V121.622Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_69">
              <g id="SvgjsSymbol1000_69">
                <path
                  id="Vector_205"
                  d="M0 91.2162L20.2703 81.0811L40.5405 91.2162L20.2703 101.351L0 91.2162Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_69">
                <path
                  id="Vector_206"
                  d="M0 91.2162L20.2703 101.351V121.622L0 111.487V91.2162Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_69">
                <path
                  id="Vector_207"
                  d="M20.2703 101.351L40.5405 91.2162V111.487L20.2703 121.622V101.351Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_70">
              <g id="SvgjsSymbol1000_70">
                <path
                  id="Vector_208"
                  d="M0 70.9459L20.2703 60.8108L40.5405 70.9459L20.2703 81.0811L0 70.9459Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_70">
                <path
                  id="Vector_209"
                  d="M0 70.9459L20.2703 81.0811V101.351L0 91.2162V70.9459Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_70">
                <path
                  id="Vector_210"
                  d="M20.2703 81.0811L40.5405 70.9459V91.2162L20.2703 101.351V81.0811Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_71">
              <g id="SvgjsSymbol1000_71">
                <path
                  id="Vector_211"
                  d="M0 50.6757L20.2703 40.5405L40.5405 50.6757L20.2703 60.8108L0 50.6757Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_71">
                <path
                  id="Vector_212"
                  d="M0 50.6757L20.2703 60.8108V81.0811L0 70.9459V50.6757Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_71">
                <path
                  id="Vector_213"
                  d="M20.2703 60.8108L40.5405 50.6757V70.9459L20.2703 81.0811V60.8108Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_72">
              <g id="SvgjsSymbol1000_72">
                <path
                  id="Vector_214"
                  d="M0 30.4054L20.2703 20.2703L40.5405 30.4054L20.2703 40.5406L0 30.4054Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_72">
                <path
                  id="Vector_215"
                  d="M0 30.4054L20.2703 40.5405V60.8108L0 50.6757V30.4054Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_72">
                <path
                  id="Vector_216"
                  d="M20.2703 40.5405L40.5405 30.4054V50.6757L20.2703 60.8108V40.5405Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_73">
              <g id="SvgjsSymbol1000_73">
                <path
                  id="Vector_217"
                  d="M30.4054 60.8108L50.6757 50.6757L70.9459 60.8108L50.6757 70.9459L30.4054 60.8108Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_73">
                <path
                  id="Vector_218"
                  d="M30.4054 60.8108L50.6757 70.9459V91.2162L30.4054 81.0811V60.8108Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_73">
                <path
                  id="Vector_219"
                  d="M50.6757 70.9459L70.9459 60.8108V81.0811L50.6757 91.2162V70.9459Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_74">
              <g id="SvgjsSymbol1000_74">
                <path
                  id="Vector_220"
                  d="M60.8108 131.757L81.0811 121.622L101.351 131.757L81.0811 141.892L60.8108 131.757Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_74">
                <path
                  id="Vector_221"
                  d="M60.8108 131.757L81.0811 141.892V162.162L60.8108 152.027V131.757Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_74">
                <path
                  id="Vector_222"
                  d="M81.0811 141.892L101.351 131.757V152.027L81.0811 162.162V141.892Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_75">
              <g id="SvgjsSymbol1000_75">
                <path
                  id="Vector_223"
                  d="M60.8108 111.486L81.0811 101.351L101.351 111.486L81.0811 121.622L60.8108 111.486Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_75">
                <path
                  id="Vector_224"
                  d="M60.8108 111.486L81.0811 121.622V141.892L60.8108 131.757V111.486Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_75">
                <path
                  id="Vector_225"
                  d="M81.0811 121.622L101.351 111.486V131.757L81.0811 141.892V121.622Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_76">
              <g id="SvgjsSymbol1000_76">
                <path
                  id="Vector_226"
                  d="M60.8108 91.2162L81.0811 81.0811L101.351 91.2162L81.0811 101.351L60.8108 91.2162Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_76">
                <path
                  id="Vector_227"
                  d="M60.8108 91.2162L81.0811 101.351V121.622L60.8108 111.487V91.2162Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_76">
                <path
                  id="Vector_228"
                  d="M81.0811 101.351L101.351 91.2162V111.487L81.0811 121.622V101.351Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_77">
              <g id="SvgjsSymbol1000_77">
                <path
                  id="Vector_229"
                  d="M60.8108 70.9459L81.0811 60.8108L101.351 70.9459L81.0811 81.0811L60.8108 70.9459Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_77">
                <path
                  id="Vector_230"
                  d="M60.8108 70.9459L81.0811 81.0811V101.351L60.8108 91.2162V70.9459Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_77">
                <path
                  id="Vector_231"
                  d="M81.0811 81.0811L101.351 70.9459V91.2162L81.0811 101.351V81.0811Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_78">
              <g id="SvgjsSymbol1000_78">
                <path
                  id="Vector_232"
                  d="M60.8108 50.6757L81.0811 40.5405L101.351 50.6757L81.0811 60.8108L60.8108 50.6757Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_78">
                <path
                  id="Vector_233"
                  d="M60.8108 50.6757L81.0811 60.8108V81.0811L60.8108 70.9459V50.6757Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_78">
                <path
                  id="Vector_234"
                  d="M81.0811 60.8108L101.351 50.6757V70.9459L81.0811 81.0811V60.8108Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="o">
            <g id="block_79">
              <g id="SvgjsSymbol1000_79">
                <path
                  id="Vector_235"
                  d="M121.622 90.8108L141.892 80.6757L162.162 90.8108L141.892 100.946L121.622 90.8108Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_79">
                <path
                  id="Vector_236"
                  d="M121.622 90.8108L141.892 100.946V121.216L121.622 111.081V90.8108Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_79">
                <path
                  id="Vector_237"
                  d="M141.892 100.946L162.162 90.8108V111.081L141.892 121.216V100.946Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_80">
              <g id="SvgjsSymbol1000_80">
                <path
                  id="Vector_238"
                  d="M121.622 70.5405L141.892 60.4054L162.162 70.5405L141.892 80.6757L121.622 70.5405Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_80">
                <path
                  id="Vector_239"
                  d="M121.622 70.5405L141.892 80.6757V100.946L121.622 90.8108V70.5405Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_80">
                <path
                  id="Vector_240"
                  d="M141.892 80.6757L162.162 70.5405V90.8108L141.892 100.946V80.6757Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_81">
              <g id="SvgjsSymbol1000_81">
                <path
                  id="Vector_241"
                  d="M121.622 50.2703L141.892 40.1351L162.162 50.2703L141.892 60.4054L121.622 50.2703Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_81">
                <path
                  id="Vector_242"
                  d="M121.622 50.2703L141.892 60.4054V80.6757L121.622 70.5405V50.2703Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_81">
                <path
                  id="Vector_243"
                  d="M141.892 60.4054L162.162 50.2703V70.5405L141.892 80.6757V60.4054Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_82">
              <g id="SvgjsSymbol1000_82">
                <path
                  id="Vector_244"
                  d="M141.892 40.1352L162.162 30L182.432 40.1352L162.162 50.2703L141.892 40.1352Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_82">
                <path
                  id="Vector_245"
                  d="M141.892 40.1351L162.162 50.2703V70.5405L141.892 60.4054V40.1351Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_82">
                <path
                  id="Vector_246"
                  d="M162.162 50.2703L182.432 40.1351V60.4054L162.162 70.5405V50.2703Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_83">
              <g id="SvgjsSymbol1000_83">
                <path
                  id="Vector_247"
                  d="M162.162 50.2703L182.432 40.1351L202.703 50.2703L182.432 60.4054L162.162 50.2703Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_83">
                <path
                  id="Vector_248"
                  d="M162.162 50.2703L182.432 60.4054V80.6757L162.162 70.5405V50.2703Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_83">
                <path
                  id="Vector_249"
                  d="M182.432 60.4054L202.703 50.2703V70.5405L182.432 80.6757V60.4054Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_84">
              <g id="SvgjsSymbol1000_84">
                <path
                  id="Vector_250"
                  d="M141.892 121.216L162.162 111.081L182.432 121.216L162.162 131.351L141.892 121.216Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_84">
                <path
                  id="Vector_251"
                  d="M141.892 121.216L162.162 131.351V151.622L141.892 141.487V121.216Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_84">
                <path
                  id="Vector_252"
                  d="M162.162 131.351L182.432 121.216V141.487L162.162 151.622V131.351Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_85">
              <g id="SvgjsSymbol1000_85">
                <path
                  id="Vector_253"
                  d="M162.162 131.351L182.432 121.216L202.703 131.351L182.432 141.487L162.162 131.351Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_85">
                <path
                  id="Vector_254"
                  d="M162.162 131.351L182.432 141.486V161.757L162.162 151.622V131.351Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_85">
                <path
                  id="Vector_255"
                  d="M182.432 141.486L202.703 131.351V151.622L182.432 161.757V141.486Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_86">
              <g id="SvgjsSymbol1000_86">
                <path
                  id="Vector_256"
                  d="M182.432 121.216L202.703 111.081L222.973 121.216L202.703 131.351L182.432 121.216Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_86">
                <path
                  id="Vector_257"
                  d="M182.432 121.216L202.703 131.351V151.622L182.432 141.487V121.216Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_86">
                <path
                  id="Vector_258"
                  d="M202.703 131.351L222.973 121.216V141.487L202.703 151.622V131.351Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_87">
              <g id="SvgjsSymbol1000_87">
                <path
                  id="Vector_259"
                  d="M182.432 100.946L202.703 90.8108L222.973 100.946L202.703 111.081L182.432 100.946Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_87">
                <path
                  id="Vector_260"
                  d="M182.432 100.946L202.703 111.081V131.351L182.432 121.216V100.946Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_87">
                <path
                  id="Vector_261"
                  d="M202.703 111.081L222.973 100.946V121.216L202.703 131.351V111.081Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_88">
              <g id="SvgjsSymbol1000_88">
                <path
                  id="Vector_262"
                  d="M182.432 80.6757L202.703 70.5405L222.973 80.6757L202.703 90.8108L182.432 80.6757Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_88">
                <path
                  id="Vector_263"
                  d="M182.432 80.6757L202.703 90.8108V111.081L182.432 100.946V80.6757Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_88">
                <path
                  id="Vector_264"
                  d="M202.703 90.8108L222.973 80.6757V100.946L202.703 111.081V90.8108Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="o_2">
            <g id="block_89">
              <g id="SvgjsSymbol1000_89">
                <path
                  id="Vector_265"
                  d="M243.243 91.6216L263.514 81.4865L283.784 91.6216L263.514 101.757L243.243 91.6216Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_89">
                <path
                  id="Vector_266"
                  d="M243.243 91.6216L263.514 101.757V122.027L243.243 111.892V91.6216Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_89">
                <path
                  id="Vector_267"
                  d="M263.514 101.757L283.784 91.6216V111.892L263.514 122.027V101.757Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_90">
              <g id="SvgjsSymbol1000_90">
                <path
                  id="Vector_268"
                  d="M243.243 71.3514L263.514 61.2162L283.784 71.3514L263.514 81.4865L243.243 71.3514Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_90">
                <path
                  id="Vector_269"
                  d="M243.243 71.3513L263.514 81.4865V101.757L243.243 91.6216V71.3513Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_90">
                <path
                  id="Vector_270"
                  d="M263.514 81.4865L283.784 71.3513V91.6216L263.514 101.757V81.4865Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_91">
              <g id="SvgjsSymbol1000_91">
                <path
                  id="Vector_271"
                  d="M243.243 51.0811L263.514 40.9459L283.784 51.0811L263.514 61.2162L243.243 51.0811Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_91">
                <path
                  id="Vector_272"
                  d="M243.243 51.0811L263.514 61.2162V81.4865L243.243 71.3513V51.0811Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_91">
                <path
                  id="Vector_273"
                  d="M263.514 61.2162L283.784 51.0811V71.3513L263.514 81.4865V61.2162Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_92">
              <g id="SvgjsSymbol1000_92">
                <path
                  id="Vector_274"
                  d="M263.514 40.9459L283.784 30.8108L304.054 40.9459L283.784 51.0811L263.514 40.9459Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_92">
                <path
                  id="Vector_275"
                  d="M263.514 40.9459L283.784 51.0811V71.3513L263.514 61.2162V40.9459Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_92">
                <path
                  id="Vector_276"
                  d="M283.784 51.0811L304.054 40.9459V61.2162L283.784 71.3513V51.0811Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_93">
              <g id="SvgjsSymbol1000_93">
                <path
                  id="Vector_277"
                  d="M283.784 51.0811L304.054 40.9459L324.324 51.0811L304.054 61.2162L283.784 51.0811Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_93">
                <path
                  id="Vector_278"
                  d="M283.784 51.0811L304.054 61.2162V81.4865L283.784 71.3513V51.0811Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_93">
                <path
                  id="Vector_279"
                  d="M304.054 61.2162L324.324 51.0811V71.3513L304.054 81.4865V61.2162Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_94">
              <g id="SvgjsSymbol1000_94">
                <path
                  id="Vector_280"
                  d="M263.514 122.027L283.784 111.892L304.054 122.027L283.784 132.162L263.514 122.027Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_94">
                <path
                  id="Vector_281"
                  d="M263.514 122.027L283.784 132.162V152.432L263.514 142.297V122.027Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_94">
                <path
                  id="Vector_282"
                  d="M283.784 132.162L304.054 122.027V142.297L283.784 152.432V132.162Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_95">
              <g id="SvgjsSymbol1000_95">
                <path
                  id="Vector_283"
                  d="M283.784 132.162L304.054 122.027L324.324 132.162L304.054 142.297L283.784 132.162Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_95">
                <path
                  id="Vector_284"
                  d="M283.784 132.162L304.054 142.297V162.568L283.784 152.432V132.162Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_95">
                <path
                  id="Vector_285"
                  d="M304.054 142.297L324.324 132.162V152.432L304.054 162.568V142.297Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_96">
              <g id="SvgjsSymbol1000_96">
                <path
                  id="Vector_286"
                  d="M304.054 122.027L324.324 111.892L344.595 122.027L324.324 132.162L304.054 122.027Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_96">
                <path
                  id="Vector_287"
                  d="M304.054 122.027L324.324 132.162V152.432L304.054 142.297V122.027Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_96">
                <path
                  id="Vector_288"
                  d="M324.324 132.162L344.595 122.027V142.297L324.324 152.432V132.162Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_97">
              <g id="SvgjsSymbol1000_97">
                <path
                  id="Vector_289"
                  d="M304.054 101.757L324.324 91.6216L344.595 101.757L324.324 111.892L304.054 101.757Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_97">
                <path
                  id="Vector_290"
                  d="M304.054 101.757L324.324 111.892V132.162L304.054 122.027V101.757Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_97">
                <path
                  id="Vector_291"
                  d="M324.324 111.892L344.595 101.757V122.027L324.324 132.162V111.892Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_98">
              <g id="SvgjsSymbol1000_98">
                <path
                  id="Vector_292"
                  d="M304.054 81.4865L324.324 71.3513L344.595 81.4865L324.324 91.6216L304.054 81.4865Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_98">
                <path
                  id="Vector_293"
                  d="M304.054 81.4865L324.324 91.6216V111.892L304.054 101.757V81.4865Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_98">
                <path
                  id="Vector_294"
                  d="M324.324 91.6216L344.595 81.4865V101.757L324.324 111.892V91.6216Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="n">
            <g id="block_99">
              <g id="SvgjsSymbol1000_99">
                <path
                  id="Vector_295"
                  d="M364.865 122.027L385.135 111.892L405.405 122.027L385.135 132.162L364.865 122.027Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_99">
                <path
                  id="Vector_296"
                  d="M364.865 122.027L385.135 132.162V152.432L364.865 142.297V122.027Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_99">
                <path
                  id="Vector_297"
                  d="M385.135 132.162L405.405 122.027V142.297L385.135 152.432V132.162Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_100">
              <g id="SvgjsSymbol1000_100">
                <path
                  id="Vector_298"
                  d="M364.865 101.757L385.135 91.6216L405.405 101.757L385.135 111.892L364.865 101.757Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_100">
                <path
                  id="Vector_299"
                  d="M364.865 101.757L385.135 111.892V132.162L364.865 122.027V101.757Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_100">
                <path
                  id="Vector_300"
                  d="M385.135 111.892L405.405 101.757V122.027L385.135 132.162V111.892Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_101">
              <g id="SvgjsSymbol1000_101">
                <path
                  id="Vector_301"
                  d="M364.865 81.4865L385.135 71.3513L405.405 81.4865L385.135 91.6216L364.865 81.4865Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_101">
                <path
                  id="Vector_302"
                  d="M364.865 81.4865L385.135 91.6216V111.892L364.865 101.757V81.4865Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_101">
                <path
                  id="Vector_303"
                  d="M385.135 91.6216L405.405 81.4865V101.757L385.135 111.892V91.6216Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_102">
              <g id="SvgjsSymbol1000_102">
                <path
                  id="Vector_304"
                  d="M364.865 61.2162L385.135 51.0811L405.405 61.2162L385.135 71.3513L364.865 61.2162Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_102">
                <path
                  id="Vector_305"
                  d="M364.865 61.2162L385.135 71.3514V91.6216L364.865 81.4865V61.2162Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_102">
                <path
                  id="Vector_306"
                  d="M385.135 71.3514L405.405 61.2162V81.4865L385.135 91.6216V71.3514Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_103">
              <g id="SvgjsSymbol1000_103">
                <path
                  id="Vector_307"
                  d="M364.865 40.9459L385.135 30.8108L405.405 40.9459L385.135 51.0811L364.865 40.9459Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_103">
                <path
                  id="Vector_308"
                  d="M364.865 40.9459L385.135 51.0811V71.3513L364.865 61.2162V40.9459Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_103">
                <path
                  id="Vector_309"
                  d="M385.135 51.0811L405.405 40.9459V61.2162L385.135 71.3513V51.0811Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_104">
              <g id="SvgjsSymbol1000_104">
                <path
                  id="Vector_310"
                  d="M385.135 71.3514L405.405 61.2162L425.676 71.3514L405.405 81.4865L385.135 71.3514Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_104">
                <path
                  id="Vector_311"
                  d="M385.135 71.3513L405.405 81.4865V101.757L385.135 91.6216V71.3513Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_104">
                <path
                  id="Vector_312"
                  d="M405.405 81.4865L425.676 71.3513V91.6216L405.405 101.757V81.4865Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_105">
              <g id="SvgjsSymbol1000_105">
                <path
                  id="Vector_313"
                  d="M405.405 101.757L425.676 91.6216L445.946 101.757L425.676 111.892L405.405 101.757Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_105">
                <path
                  id="Vector_314"
                  d="M405.405 101.757L425.676 111.892V132.162L405.405 122.027V101.757Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_105">
                <path
                  id="Vector_315"
                  d="M425.676 111.892L445.946 101.757V122.027L425.676 132.162V111.892Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_106">
              <g id="SvgjsSymbol1000_106">
                <path
                  id="Vector_316"
                  d="M425.676 132.162L445.946 122.027L466.216 132.162L445.946 142.297L425.676 132.162Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_106">
                <path
                  id="Vector_317"
                  d="M425.676 132.162L445.946 142.297V162.568L425.676 152.432V132.162Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_106">
                <path
                  id="Vector_318"
                  d="M445.946 142.297L466.216 132.162V152.432L445.946 162.568V142.297Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_107">
              <g id="SvgjsSymbol1000_107">
                <path
                  id="Vector_319"
                  d="M425.676 111.892L445.946 101.757L466.216 111.892L445.946 122.027L425.676 111.892Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_107">
                <path
                  id="Vector_320"
                  d="M425.676 111.892L445.946 122.027V142.297L425.676 132.162V111.892Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_107">
                <path
                  id="Vector_321"
                  d="M445.946 122.027L466.216 111.892V132.162L445.946 142.297V122.027Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_108">
              <g id="SvgjsSymbol1000_108">
                <path
                  id="Vector_322"
                  d="M425.676 91.6216L445.946 81.4865L466.216 91.6216L445.946 101.757L425.676 91.6216Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_108">
                <path
                  id="Vector_323"
                  d="M425.676 91.6216L445.946 101.757V122.027L425.676 111.892V91.6216Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_108">
                <path
                  id="Vector_324"
                  d="M445.946 101.757L466.216 91.6216V111.892L445.946 122.027V101.757Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_109">
              <g id="SvgjsSymbol1000_109">
                <path
                  id="Vector_325"
                  d="M425.676 71.3514L445.946 61.2162L466.216 71.3514L445.946 81.4865L425.676 71.3514Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_109">
                <path
                  id="Vector_326"
                  d="M425.676 71.3513L445.946 81.4865V101.757L425.676 91.6216V71.3513Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_109">
                <path
                  id="Vector_327"
                  d="M445.946 81.4865L466.216 71.3513V91.6216L445.946 101.757V81.4865Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_110">
              <g id="SvgjsSymbol1000_110">
                <path
                  id="Vector_328"
                  d="M425.676 51.0811L445.946 40.9459L466.216 51.0811L445.946 61.2162L425.676 51.0811Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_110">
                <path
                  id="Vector_329"
                  d="M425.676 51.0811L445.946 61.2162V81.4865L425.676 71.3513V51.0811Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_110">
                <path
                  id="Vector_330"
                  d="M445.946 61.2162L466.216 51.0811V71.3513L445.946 81.4865V61.2162Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="l">
            <g id="block_111">
              <g id="SvgjsSymbol1000_111">
                <path
                  id="Vector_331"
                  d="M486.486 111.486L506.757 101.351L527.027 111.486L506.757 121.622L486.486 111.486Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_111">
                <path
                  id="Vector_332"
                  d="M486.486 111.486L506.757 121.622V141.892L486.486 131.757V111.486Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_111">
                <path
                  id="Vector_333"
                  d="M506.757 121.622L527.027 111.486V131.757L506.757 141.892V121.622Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_112">
              <g id="SvgjsSymbol1000_112">
                <path
                  id="Vector_334"
                  d="M486.486 91.2162L506.757 81.0811L527.027 91.2162L506.757 101.351L486.486 91.2162Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_112">
                <path
                  id="Vector_335"
                  d="M486.486 91.2162L506.757 101.351V121.622L486.486 111.487V91.2162Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_112">
                <path
                  id="Vector_336"
                  d="M506.757 101.351L527.027 91.2162V111.487L506.757 121.622V101.351Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_113">
              <g id="SvgjsSymbol1000_113">
                <path
                  id="Vector_337"
                  d="M486.486 70.9459L506.757 60.8108L527.027 70.9459L506.757 81.0811L486.486 70.9459Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_113">
                <path
                  id="Vector_338"
                  d="M486.486 70.9459L506.757 81.0811V101.351L486.486 91.2162V70.9459Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_113">
                <path
                  id="Vector_339"
                  d="M506.757 81.0811L527.027 70.9459V91.2162L506.757 101.351V81.0811Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_114">
              <g id="SvgjsSymbol1000_114">
                <path
                  id="Vector_340"
                  d="M486.486 50.6757L506.757 40.5405L527.027 50.6757L506.757 60.8108L486.486 50.6757Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_114">
                <path
                  id="Vector_341"
                  d="M486.486 50.6756L506.757 60.8108V81.081L486.486 70.9459V50.6756Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_114">
                <path
                  id="Vector_342"
                  d="M506.757 60.8108L527.027 50.6756V70.9459L506.757 81.081V60.8108Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_115">
              <g id="SvgjsSymbol1000_115">
                <path
                  id="Vector_343"
                  d="M486.486 30.4054L506.757 20.2703L527.027 30.4054L506.757 40.5406L486.486 30.4054Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_115">
                <path
                  id="Vector_344"
                  d="M486.486 30.4054L506.757 40.5405V60.8108L486.486 50.6757V30.4054Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_115">
                <path
                  id="Vector_345"
                  d="M506.757 40.5405L527.027 30.4054V50.6757L506.757 60.8108V40.5405Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_116">
              <g id="SvgjsSymbol1000_116">
                <path
                  id="Vector_346"
                  d="M486.486 10.1351L506.757 0L527.027 10.1351L506.757 20.2703L486.486 10.1351Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_116">
                <path
                  id="Vector_347"
                  d="M486.486 10.1351L506.757 20.2703V40.5405L486.486 30.4054V10.1351Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_116">
                <path
                  id="Vector_348"
                  d="M506.757 20.2703L527.027 10.1351V30.4054L506.757 40.5405V20.2703Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_117">
              <g id="SvgjsSymbol1000_117">
                <path
                  id="Vector_349"
                  d="M506.757 121.622L527.027 111.486L547.297 121.622L527.027 131.757L506.757 121.622Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_117">
                <path
                  id="Vector_350"
                  d="M506.757 121.622L527.027 131.757V152.027L506.757 141.892V121.622Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_117">
                <path
                  id="Vector_351"
                  d="M527.027 131.757L547.297 121.622V141.892L527.027 152.027V131.757Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_118">
              <g id="SvgjsSymbol1000_118">
                <path
                  id="Vector_352"
                  d="M527.027 131.757L547.297 121.622L567.568 131.757L547.297 141.892L527.027 131.757Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_118">
                <path
                  id="Vector_353"
                  d="M527.027 131.757L547.297 141.892V162.162L527.027 152.027V131.757Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_118">
                <path
                  id="Vector_354"
                  d="M547.297 141.892L567.568 131.757V152.027L547.297 162.162V141.892Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="i">
            <g id="block_119">
              <g id="SvgjsSymbol1000_119">
                <path
                  id="Vector_355"
                  d="M587.838 131.351L608.108 121.216L628.378 131.351L608.108 141.486L587.838 131.351Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_119">
                <path
                  id="Vector_356"
                  d="M587.838 131.351L608.108 141.486V161.757L587.838 151.622V131.351Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_119">
                <path
                  id="Vector_357"
                  d="M608.108 141.486L628.378 131.351V151.622L608.108 161.757V141.486Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_120">
              <g id="SvgjsSymbol1000_120">
                <path
                  id="Vector_358"
                  d="M587.838 111.081L608.108 100.946L628.378 111.081L608.108 121.216L587.838 111.081Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_120">
                <path
                  id="Vector_359"
                  d="M587.838 111.081L608.108 121.216V141.486L587.838 131.351V111.081Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_120">
                <path
                  id="Vector_360"
                  d="M608.108 121.216L628.378 111.081V131.351L608.108 141.486V121.216Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_121">
              <g id="SvgjsSymbol1000_121">
                <path
                  id="Vector_361"
                  d="M587.838 90.8108L608.108 80.6757L628.378 90.8108L608.108 100.946L587.838 90.8108Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_121">
                <path
                  id="Vector_362"
                  d="M587.838 90.8108L608.108 100.946V121.216L587.838 111.081V90.8108Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_121">
                <path
                  id="Vector_363"
                  d="M608.108 100.946L628.378 90.8108V111.081L608.108 121.216V100.946Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_122">
              <g id="SvgjsSymbol1000_122">
                <path
                  id="Vector_364"
                  d="M587.838 60.4054L608.108 50.2703L628.378 60.4054L608.108 70.5405L587.838 60.4054Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_122">
                <path
                  id="Vector_365"
                  d="M587.838 60.4054L608.108 70.5405V90.8108L587.838 80.6757V60.4054Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_122">
                <path
                  id="Vector_366"
                  d="M608.108 70.5405L628.378 60.4054V80.6757L608.108 90.8108V70.5405Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
          <g id="t">
            <g id="block_123">
              <g id="SvgjsSymbol1000_123">
                <path
                  id="Vector_367"
                  d="M679.054 132.162L699.324 122.027L719.595 132.162L699.324 142.297L679.054 132.162Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_123">
                <path
                  id="Vector_368"
                  d="M679.054 132.162L699.324 142.297V162.568L679.054 152.432V132.162Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_123">
                <path
                  id="Vector_369"
                  d="M699.324 142.297L719.595 132.162V152.432L699.324 162.568V142.297Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_124">
              <g id="SvgjsSymbol1000_124">
                <path
                  id="Vector_370"
                  d="M679.054 111.892L699.324 101.757L719.595 111.892L699.324 122.027L679.054 111.892Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_124">
                <path
                  id="Vector_371"
                  d="M679.054 111.892L699.324 122.027V142.297L679.054 132.162V111.892Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_124">
                <path
                  id="Vector_372"
                  d="M699.324 122.027L719.595 111.892V132.162L699.324 142.297V122.027Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_125">
              <g id="SvgjsSymbol1000_125">
                <path
                  id="Vector_373"
                  d="M679.054 91.6216L699.324 81.4865L719.595 91.6216L699.324 101.757L679.054 91.6216Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_125">
                <path
                  id="Vector_374"
                  d="M679.054 91.6216L699.324 101.757V122.027L679.054 111.892V91.6216Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_125">
                <path
                  id="Vector_375"
                  d="M699.324 101.757L719.595 91.6216V111.892L699.324 122.027V101.757Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_126">
              <g id="SvgjsSymbol1000_126">
                <path
                  id="Vector_376"
                  d="M679.054 81.4865L699.324 71.3513L719.595 81.4865L699.324 91.6216L679.054 81.4865Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_126">
                <path
                  id="Vector_377"
                  d="M679.054 81.4865L699.324 91.6216V111.892L679.054 101.757V81.4865Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_126">
                <path
                  id="Vector_378"
                  d="M699.324 91.6216L719.595 81.4865V101.757L699.324 111.892V91.6216Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_127">
              <g id="SvgjsSymbol1000_127">
                <path
                  id="Vector_379"
                  d="M648.649 40.9459L668.919 30.8108L689.189 40.9459L668.919 51.0811L648.649 40.9459Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_127">
                <path
                  id="Vector_380"
                  d="M648.649 40.9459L668.919 51.0811V71.3513L648.649 61.2162V40.9459Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_127">
                <path
                  id="Vector_381"
                  d="M668.919 51.0811L689.189 40.9459V61.2162L668.919 71.3513V51.0811Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_128">
              <g id="SvgjsSymbol1000_128">
                <path
                  id="Vector_382"
                  d="M668.919 51.0811L689.189 40.9459L709.459 51.0811L689.189 61.2162L668.919 51.0811Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_128">
                <path
                  id="Vector_383"
                  d="M668.919 51.0811L689.189 61.2162V81.4865L668.919 71.3513V51.0811Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_128">
                <path
                  id="Vector_384"
                  d="M689.189 61.2162L709.459 51.0811V71.3513L689.189 81.4865V61.2162Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_129">
              <g id="SvgjsSymbol1000_129">
                <path
                  id="Vector_385"
                  d="M689.189 61.2162L709.459 51.0811L729.73 61.2162L709.459 71.3513L689.189 61.2162Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_129">
                <path
                  id="Vector_386"
                  d="M689.189 61.2162L709.459 71.3514V91.6216L689.189 81.4865V61.2162Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_129">
                <path
                  id="Vector_387"
                  d="M709.459 71.3514L729.73 61.2162V81.4865L709.459 91.6216V71.3514Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
            <g id="block_130">
              <g id="SvgjsSymbol1000_130">
                <path
                  id="Vector_388"
                  d="M709.459 71.3514L729.73 61.2162L750 71.3514L729.73 81.4865L709.459 71.3514Z"
                  fill="#6C26D9"
                />
              </g>
              <g id="SvgjsSymbol1001_130">
                <path
                  id="Vector_389"
                  d="M709.459 71.3513L729.73 81.4865V101.757L709.459 91.6216V71.3513Z"
                  fill="#A358FF"
                />
              </g>
              <g id="SvgjsSymbol1002_130">
                <path
                  id="Vector_390"
                  d="M729.73 81.4865L750 71.3513V91.6216L729.73 101.757V81.4865Z"
                  fill="#2E00A6"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default MoonlitGraceArt;
