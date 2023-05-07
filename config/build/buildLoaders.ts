import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    // порядок loaders в массиве имеет значение, поэтому лучше создавать для каждого отдельного loader свою переменную, чтобы составить
    // порядок было удобнее 

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // вместо style-loader - MiniCssExtractPlugin.loader, который отделяет css в нужном билде(здесь - только в prod) в отдельный файл - без него же css будет напрямую вписан в js-файл билда
            isDev ? 'style-loader': MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev 
                            ? '[path][name]__[local]' 
                            : '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ]
    }

    // для работы с JSX, если бы мы работали на JS вместо TS, нужен был бы babel-loader. Но TS уже умеет работать с TSX(JSX в TS), следовательно нет нужды
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}