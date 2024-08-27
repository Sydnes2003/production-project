import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {

    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
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
        typescriptLoader,
        scssLoader,
    ];
}