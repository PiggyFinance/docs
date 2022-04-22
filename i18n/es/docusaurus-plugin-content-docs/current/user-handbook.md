---
sidebar_position: 5
---

# Manual del usuario

Esta es una guía rápida para interactuar e invertir con la plataforma BOC.
En primer lugar, para completar la inversión en BOC tenemos que empezar en la página de inversión del usuario. Nos dirigimos a la [página de inicio](https://bankofchain.io/#/) y hacemos clic en el botón `LAUNCH APP`.

![launchapp](/images/launchapp.png)

## Conexión de Wallet (Billetera)

Podemos interactuar con BOC a través de una [wallets](appendix#wallet) (billetera digital), la APP es compatible [MetaMask](https://metamask.io/) y [WalletConnect](https://walletconnect.com/), pulsando el botón `CONNECT WALLET`.

![connectwallet](/images/connectwallet.png)

Después de conectar el monedero, podemos ver el saldo de USDT en nuestra cuenta.

![pic4](/images/pic-4.png)

## Ajustes de los parámetros

### Cross-chain Bridge

BOC proporciona opciones de [cross-chain bridge](appendix#bridge), en caso de que necesitemos implementar una operación cross-chain.

![chainbridge](/images/chainbridge.png)

### Cambiar de cadena

En la actualidad, BOC trabaja en Ethereum, BNB Chain y Polygon. Si necesitamos cambiar de cadena, pueden hacerlo a través de `NETWORKS`.

![networkchange](/images/networkchange.png)

## Inversión y reembolso

### Depósito

 Una vez que el monedero se ha conectado con éxito, podemos completar el depósito seleccionando la cantidad deseada o seleccionando el saldo "Max", y luego haciendo clic en `DEPOSIT`.

![pic7](/images/pic-7.png)

### Retirada de fondos

Después de conectar con éxito el monedero, podemos completar la retirada seleccionando la cuota deseada o seleccionando la cuota "máxima" y haciendo clic en `WITHDRAW`.

![pic8](/images/pic-8.png)

### Retirada Parámetros avanzados

![advancesetting](/images/advancesetting.png)

There are 3 advanced setup parameters:

1. **Exchanged**: Habilitación de la función de intercambio. Cada estrategia en el BOC utiliza diferentes stablecoins. Cuando retiremos dinero, lo haremos según el APY de la estrategia de menor a mayor. Si se obtiene una estrategia que no sea USDT, se devolverá la moneda estable de la estrategia correspondiente, por ejemplo, si se obtiene Yearn LUSD, se devolverá LUSD y si se cierra el intercambio, se devolverá a nuestra cuenta el valor correspondiente de LUSD. Si se habilita la redención, es necesario establecer el parámetro Slippage.
2. **Pérdida máxima**: La pérdida máxima en los retiros. Cuando especifiquemos la cuota de retirada, se mostrarán los activos totales con el valor neto actual, pero estos no son los fondos que podemos obtener finalmente, y pueden producirse pérdidas durante el proceso de retirada, incluidas las pérdidas por deslizamiento de cambio. Si nuestros activos totales se estiman en $1000 en este momento, y elegimos Max Loss=0,3%, entonces obtendremos no menos de $997.
3. **Slippage**: [Slippage](appendix#slippage) (deslizamiento) entre diferentes monedas. Después de habilitar Exchanged, necesitamos especificar el deslizamiento que aceptamos.

## Dashboard (Tablero de mandos)

Desde el [dashboard](appendix#dashboard) podemos obtener la siguiente información relevante sobre nuestros activos y los protocolos que interactúan con ellos.

<https://dashboard.bankofchain.io>

![dashboard](/images/dashboard.jpg)

Cada dato se describe como sigue:

1. Cantidad de bloqueo de la bóveda en cadena, leer la interfaz del subgrafo.
2. El número de usuarios de inversión, leer la interfaz del subgrafo.
3. APY de los últimos 30 días en función del patrimonio neto.
4. Proporción de fondos de protocolo, consultar la interfaz del subgráfico.
5. El patrimonio total de cada estrategia, consultar la interfaz de contratos.
6. APY oficial, se extrae regularmente cada mañana.
7. Moneda estándar beneficio semanal, APY semanal.
8. Dirección de la estrategia.
9. Registros de operaciones de la bóveda, mostrados con el navegador de la cadena de bloques.

Gráficas BOC:

- ETH: <https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-eth>

- BNB: <https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-bsc>

- POLYGON: <https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-matic>

## Detalles de la estrategia

Tome SushiUsdcUsdtStrategy como ejemplo, entre en la página de detalles de la estrategia como se muestra en la figura:

![detail](/images/detail.jpg)

Cada dato se describe como sigue:

1. Datos de la póliza
      - Nombre de la póliza
      - Stablecoins aceptados por la estrategia
      - Los activos totales actuales de la estrategia (valorados en USDT)
      - Los activos totales de la inversión histórica de la estrategia (valorados en USDT)
2. Rendimiento histórico del APY de la estrategia
      - APY oficial histórico (línea amarilla)
      - APY semanal histórico (línea azul)
3. Activos totales de la estrategia (moneda estándar)
4. Cambios en los activos de las operaciones de la estrategia (moneda estándar)
5. Tipo de acción de la estrategia
      - "harvest": La estrategia completa la venta y reinversión de una mina, e informa de la valoración total de los activos
      - "lend": La bóveda pone fondos en la estrategia, y esta acción ocurre en la asignación de fondos ("doHardWork", "allocation")
      - "redeem": Vault retira fondos de la estrategia, y esta acción se produce en la asignación de fondos ("allocation")

## Análisis de inversiones personales

Entre en la página de análisis de inversiones personales para ver los ingresos de las inversiones personales.

![personalpage](/images/personalpage.jpg)

Cada dato se describe como sigue:

1. Valoración del activo total de la inversión personal (calculada en USDT).
2. Acción de BOC adquirida.
3. Pasar 30 días [APY](appendix#annual-yield-apy).
4. Ganancias no retiradas (calculadas en USDT).
5. Ganancias retiradas (calculadas en USDT).
6. Activos totales personales históricos.
7. Ingresos mensuales
