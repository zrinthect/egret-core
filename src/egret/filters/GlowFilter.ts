//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

namespace egret {
    /**
     * @class egret.GlowFilter
     * @classdesc
     * 使用 GlowFilter 类可以对显示对象应用发光效果。在投影滤镜的 distance 和 angle 属性设置为 0 时，发光滤镜与投影滤镜极为相似。
     * @extends egret.Filter
     * @version Egret 3.1.4
     * @platform Web,Native
     */
    export class GlowFilter extends Filter {
        /**
         * @private
         */
        public $red:number;
        /**
         * @private
         */
        public $green:number;
        /**
         * @private
         */
        public $blue:number;
        /**
         * Initializes a new GlowFilter instance.
         * @method egret.GlowFilter#constructor
         * @param color {number} The color of the glow. Valid values are in the hexadecimal format 0xRRGGBB. The default value is 0xFF0000.
         * @param alpha {number} The alpha transparency value for the color. Valid values are 0 to 1. For example, .25 sets a transparency value of 25%. The default value is 1.
         * @param blurX {number} The amount of horizontal blur. Valid values are 0 to 255 (floating point).
         * @param blurY {number} The amount of vertical blur. Valid values are 0 to 255 (floating point). 
         * @param strength {number} The strength of the imprint or spread. The higher the value, the more color is imprinted and the stronger the contrast between the glow and the background. Valid values are 0 to 255.
         * @param quality {number} The number of times to apply the filter.
         * @param inner {boolean} Specifies whether the glow is an inner glow. The value true indicates an inner glow. The default is false, an outer glow (a glow around the outer edges of the object).
         * @param knockout {number} Specifies whether the object has a knockout effect. A value of true makes the object's fill transparent and reveals the background color of the document. The default value is false (no knockout effect).
         * @version Egret 3.1.4
         * @platform Web
         * @language en_US
         */
        /**
         * 初始化 GlowFilter 对象
         * @method egret.GlowFilter#constructor
         * @param color {number} 光晕颜色，采用十六进制格式 0xRRGGBB。默认值为 0xFF0000。
         * @param alpha {number} 颜色的 Alpha 透明度值。有效值为 0 到 1。例如，0.25 设置透明度值为 25%。
         * @param blurX {number} 水平模糊量。有效值为 0 到 255（浮点）。
         * @param blurY {number} 垂直模糊量。有效值为 0 到 255（浮点）。
         * @param strength {number} 印记或跨页的强度。该值越高，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。
         * @param quality {number} 应用滤镜的次数。暂未实现。
         * @param inner {boolean} 指定发光是否为内侧发光。值 true 指定发光是内侧发光。值 false 指定发光是外侧发光（对象外缘周围的发光）。
         * @param knockout {number} 指定对象是否具有挖空效果。值为 true 将使对象的填充变为透明，并显示文档的背景颜色。
         * @version Egret 3.1.4
         * @platform Web
         * @language zh_CN
         */
        constructor(color:number = 0xFF0000, alpha:number = 1.0, blurX:number = 6.0, blurY:number = 6.0, strength:number = 2, quality:number = 1, inner:boolean = false, knockout:boolean = false) {
            super();
            this.type = "glow";

            this.$color = color;
            this.$blue = color & 0x0000FF;
            this.$green = (color & 0x00ff00) >> 8;
            this.$red = color >> 16;
            this.$alpha = alpha;
            this.$blurX = blurX;
            this.$blurY = blurY;
            this.$strength = strength;
            this.$quality = quality;
            this.$inner = inner;
            this.$knockout = knockout;
        }

        /**
         * @private
         */
        public $color:number;

        /**
         * The color of the glow.
         * @version Egret 3.1.4
         * @platform Web
         * @language en_US
         */
        /**
         * 光晕颜色。
         * @version Egret 3.1.4
         * @platform Web
         * @language zh_CN
         */
        public get color():number {
            return this.$color;
        }

        public set color(value:number) {
            if(this.$color == value) {
                return;
            }
            this.$color = value;
            this.$blue = value & 0x0000FF;
            this.$green = (value & 0x00ff00) >> 8;
            this.$red = value >> 16;
            this.invalidate();
        }

        /**
         * @private
         */
        public $alpha:number;

        /**
         * The alpha transparency value for the color.
         * @version Egret 3.1.4
         * @platform Web
         * @language en_US
         */
        /**
         * 颜色的 Alpha 透明度值。
         * @version Egret 3.1.4
         * @platform Web
         * @language zh_CN
         */
        public get alpha():number {
            return this.$alpha;
        }

        public set alpha(value:number) {
            if(this.$alpha == value) {
                return;
            }
            this.$alpha = value;
            this.invalidate();
        }

        /**
         * @private
         */
        public $blurX:number;

        /**
         * The amount of horizontal blur.
         * @version Egret 3.1.4
         * @platform Web
         * @language en_US
         */
        /**
         * 水平模糊量。
         * @version Egret 3.1.4
         * @platform Web
         * @language zh_CN
         */
        public get blurX():number {
            return this.$blurX;
        }

        public set blurX(value:number) {
            if(this.$blurX == value) {
                return;
            }
            this.$blurX = value;
            this.invalidate();
        }

        /**
         * @private
         */
        public $blurY:number;

        /**
         * The amount of vertical blur.
         * @version Egret 3.1.4
         * @platform Web
         * @language en_US
         */
        /**
         * 垂直模糊量。
         * @version Egret 3.1.4
         * @platform Web
         * @language zh_CN
         */
        public get blurY():number {
            return this.$blurY;
        }

        public set blurY(value:number) {
            if(this.$blurY == value) {
                return;
            }
            this.$blurY = value;
            this.invalidate();
        }

        /**
         * @private
         */
        public $strength:number;

        /**
         * The strength of the imprint or spread.
         * @version Egret 3.1.4
         * @platform Web
         * @language en_US
         */
        /**
         * 印记或跨页的强度。
         * @version Egret 3.1.4
         * @platform Web
         * @language zh_CN
         */
        public get strength():number {
            return this.$strength;
        }

        public set strength(value:number) {
            if(this.$strength == value) {
                return;
            }
            this.$strength = value;
            this.invalidate();
        }

        /**
         * @private
         */
        public $quality:number;

        /**
         * The number of times to apply the filter.
         * @version Egret 3.1.4
         * @platform Web
         * @language en_US
         */
        /**
         * 应用滤镜的次数。
         * @version Egret 3.1.4
         * @platform Web
         * @language zh_CN
         */
        public get quality():number {
            return this.$quality;
        }

        public set quality(value:number) {
            if(this.$quality == value) {
                return;
            }
            this.$quality = value;
            this.invalidate();
        }

        /**
         * @private
         */
        public $inner:boolean;

        /**
         * Specifies whether the glow is an inner glow.
         * @version Egret 3.1.4
         * @platform Web
         * @language en_US
         */
        /**
         * 指定发光是否为内侧发光。
         * @version Egret 3.1.4
         * @platform Web
         * @language zh_CN
         */
        public get inner():boolean {
            return this.$inner;
        }

        public set inner(value:boolean) {
            if(this.$inner == value) {
                return;
            }
            this.$inner = value;
            this.invalidate();
        }

        /**
         * @private
         */
        public $knockout:boolean;

        /**
         * Specifies whether the object has a knockout effect.
         * @version Egret 3.1.4
         * @platform Web
         * @language en_US
         */
        /**
         * 指定对象是否具有挖空效果。
         * @version Egret 3.1.4
         * @platform Web
         * @language zh_CN
         */
        public get knockout():boolean {
            return this.$knockout;
        }

        public set knockout(value:boolean) {
            if(this.$knockout == value) {
                return;
            }
            this.$knockout = value;
            this.invalidate();
        }

        /**
         * @private
         */
        public $toJson():string {
            return '{"color": ' + this.$color + ', "red": ' + this.$red + ', "green": ' + this.$green + ', "blue": ' + this.$blue + ', "alpha": ' + this.$alpha + ', "blurX": ' + this.$blurX + ', "blurY": ' + this.blurY + ', "strength": ' + this.$strength + ', "quality": ' + this.$quality + ', "inner": ' + this.$inner + ', "knockout": ' + this.$knockout + '}';
        }
    }
}