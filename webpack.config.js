const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин 
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин 
// подключите к проекту mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// require — это как import только в Node.js.
// Опять же, такое подключение файла мы будем использовать
// только в конфиге «Вебпака», потому что этот файл запускается в Node.js.
// Во всех остальных файлах мы по-прежнему будем пользоваться директивой import.


// Переменная __dirname в Node.js доступна глобально.
//  В ней хранится абсолютный путь до папки, в которой лежит файл,
//   где мы используем эту переменную. 
//   В нашем случае абсолютный путь до папки с конфигом «Вебпака»
//    — корневой папки нашего проекта.



// подключаем path к конфигу вебпак
// переписали точку выхода, используя утилиту path 
module.exports = {
        entry: { main: './src/pages/index.js' },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js',
            publicPath: ''
        },
        mode: 'development',
        devServer: {
            static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
            compress: true, // это ускорит загрузку в режиме разработки
            port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

            open: true // сайт будет открываться сам при запуске npm run dev
        },
        module: {
            rules: [ // rules — это массив правил
                // добавим в него объект правил для бабеля
                {
                    // регулярное выражение, которое ищет все js файлы
                    test: /\.js$/,
                    // при обработке этих файлов нужно использовать babel-loader
                    use: 'babel-loader',
                    // исключает папку node_modules, файлы в ней обрабатывать не нужно
                    exclude: '/node_modules/'
                },
                {
                    // регулярное выражение, которое ищет все файлы с такими расширениями
                    test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                    type: 'asset/resource'
                },

                {
                    // применять это правило только к CSS-файлам
                    test: /\.css$/,
                    // при обработке этих файлов нужно использовать
                    // MiniCssExtractPlugin.loader и css-loader
                    use: [MiniCssExtractPlugin.loader, {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        'postcss-loader'
                    ]
                }

            ]
        },
        plugins: [
                new HtmlWebpackPlugin({
                    template: './src/index.html' // путь к файлу index.html
                }),
                new CleanWebpackPlugin(),
                new MiniCssExtractPlugin() // подключение плагина для объединения файлов
            ] // добавьте массив



    }
    // указали первое место, куда заглянет webpack, — файл index.js в папке src

// указали в какой файл будет собираться весь js и дали ему имя