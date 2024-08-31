import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {

    const svgLoader: RuleSetRule = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
    };

    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/i,
        use: ['ts-loader'],
        exclude: /node_modules/,
    };

    const scssLoader: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            {
                loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader
            },
            {
                loader: "css-loader",
                options: {
                    modules: {
                        namedExport: false,
                        exportLocalsConvention: "as-is",
                        auto: /\.module\.s?css$/i,
                        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
                    },

                },
            },
            {
                loader: "sass-loader",
            },
        ],
    };

    return [
        svgLoader,
        fileLoader,
        typescriptLoader,
        scssLoader,
    ];
}