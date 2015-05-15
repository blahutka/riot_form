require('./_form_1.tag');
require('./_form_2.tag');

<orders-form-index>

    <div class="panel panel-default">
        <div class="panel-heading">Řekněte nám o Vašem domovu!</div>
        <div class="panel-body">
           <div class="panel-content">

           </div>
        </div>
        <section style="height: 200px">

        </section>
        <div class="panel-footer">
            <span riot-tag="orders-btn-next" steps="{steps}"></span>
        </div>
    </div>

    <script type="text/coffeescript">

        @currentView = null
        @steps = ['orders-form-form-1', 'orders-form-form-2', '3']
        @currentStep = 0
        self = this

        @on 'mount', ->
            @currentView = riot.mount($('.panel-content',self.root), 'orders-form-form-1')
            riot.route.exec(self.nextRoute)

        @nextRoute = (view, id) =>
            if view == 'steps'
                self.changeView(id)

        riot.route(self.nextRoute)

        @changeView = (id) ->
            @currentView = riot.mount($('.panel-content',self.root), id)






    </script>
</orders-form-index>

<orders-btn-next>
    <a href="#{nextUrl()}" class="btn btn-block btn-success btn-lg" name="button_next_step">Další <span class="caret caret-right"></span></a>

    <script type="text/coffeescript">
        @steps = opts.steps
        @step_id = null
        self = this

        @on 'mount', =>
            riot.route(@onRouteChange)

        @onRouteChange = (view, id) =>
            if view == 'steps'
                @update(step_id: id)

        @nextUrl = () =>
            "steps/#{@nextStepId(@step_id)}"

        @nextStepId = (id) =>
            current_index = if _.indexOf(@steps, id) >= 0 then _.indexOf(@steps, id) else 0
            return @steps[current_index+1] || @steps[0] # start again


        riot.route.exec(@onRouteChange)



    </script>
</orders-btn-next>


