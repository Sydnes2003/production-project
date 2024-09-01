import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const svgLoader: RuleSetRule = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
    };

    const babelLoader: RuleSetRule = {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                // plugins: [
                //     [
                //         "i18next-extract",
                //         {
                //             locales: ["en", "ru"],
                //             keyAsDefaultValue: true,
                //         }
                //     ],
                // ]
            },
        },
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
                loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            },
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        namedExport: false,
                        exportLocalsConvention: 'as-is',
                        auto: /\.module\.s?css$/i,
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },

                },
            },
            {
                loader: 'sass-loader',
            },
        ],
    };

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader,
        scssLoader,
    ];
}
