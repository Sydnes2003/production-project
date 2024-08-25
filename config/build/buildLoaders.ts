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
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        namedExport: false,
                        auto: /\.module\.s?css$/,
                        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [
        typescriptLoader,
        scssLoader,
    ];
}